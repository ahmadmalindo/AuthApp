import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView, Alert } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { auth } from '../../../firebase/firebase';
import Modal from "react-native-modal";

function Dashboard({ navigation, login }){

    const [ visible, setVisible ] = useState(false)

    const user = login.signIn.user

    const Status = (val) => {

        let status

        if (val == false) {
            status = ['Not Verified', '#FF6B6B', 'white']
        }
        else {
            status = ['Verified', '#02A41C', 'white']
        }

        return status
    }
    
    const emailVerified = () => {
        
        auth
            .currentUser.sendEmailVerification()
            .then((res) => {
                Alert.alert('Perhatian', 'Cek email kamu, lalu SignOut dan Login Kembali untuk melihat status akun')
                console.log(res)
            })
            .catch((err) => {
                alert(err.message)
            })
        
    }

    const signOut = () => {

        auth
            .signOut()
            .then((res) => {
                setVisible(true)
                setTimeout(() => {
                    navigation.navigate('login')
                    setVisible(false)
                })
                console.log(res)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <>
        <LinearGradient colors={['#FBFBFB', '#FAFAFA']} style={style.Container}>
            <Image source={require ('@assets/image/icon/profile.png')} style={style.image}/>
            <Text style={style.text}>{user.displayName}</Text>   
            <Text style={style.textEmail}>{user.email}</Text>    
            <View style={[style.viewStatus, {backgroundColor: Status(user.emailVerified)[1]}]}>
                <Text style={[style.textStatus, {color: Status(user.emailVerified)[2]}]}>{Status(user.emailVerified)[0]}</Text>
            </View>
            <TouchableOpacity style={style.btn} onPress={()=> emailVerified()}>
                <Text style={style.textVerif}>Verifikasi Akun?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => signOut()}>
                <Text style={style.textSignOut}>Sign Out</Text>
            </TouchableOpacity>
        </LinearGradient>
        <Modal isVisible={visible}>
            <ActivityIndicator color={'white'} size={'large'}/>
        </Modal>
        </>
    )
}

const mapStateToProps = function (state) {
  const { login } = state;
  return { login }
}

export default connect(mapStateToProps) (Dashboard);
const style = StyleSheet.create({
    Container: {
        flex: 1,
        padding: RFValue(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '27%',
        height: '13%',
        alignSelf: 'center',
        marginBottom: RFValue(15)
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: RFValue(14),
        color: 'black',
    },
    textEmail: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(10),
        color: 'black',
        marginBottom: RFValue(15)
    },
    textStatus: {
        fontFamily: 'Poppins-Regular',
        fontSize: RFValue(10),
    },
    textVerif: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: RFValue(12),
        color: 'white',
    },
    viewStatus: {
        width: RFValue(76),
        height: RFValue(22),
        borderRadius: RFValue(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: RFValue(30)
    },
    btn: {
        width: '50%',
        height: RFValue(40),
        backgroundColor: '#262626',
        borderRadius: RFValue(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: RFValue(10)
    },
    textSignOut: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: RFValue(12),
        color: '#9292E4',
        alignSelf: 'center'
    }
})