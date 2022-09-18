import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
import { InputData, ButtonConfirm, ModalSucces } from '@components';
import { auth } from '../../../../firebase/firebase';
import { Formik } from 'formik';
import * as yup from 'yup';

function ForgotPassword({ navigation }){

    const [ visible, setVisible ] = useState(false)

    const emailValidation = yup.object().shape({
      email: yup
          .string() 
          .email('Format tidak email sesuai')
          .required('Email tidak boleh kosong'),
    })

    const handlePage = () => {

        navigation.navigate('login')
    }

    const linkPassword = async (values) => {

        const actionCodeSettings = {
            url: 'https://authentification.page.link/c2Sd',
            handleCodeInApp: true,
            android: {
                packageName: 'com.authapp',
                installApp: true,
                minimumVersion: '12'
            }
        }
        
        await auth
            .sendPasswordResetEmail(values.email)
            .then((res) => {
                setVisible(true)
                console.log(res)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <>
        <LinearGradient colors={['#FBFBFB', '#FAFAFA']} style={style.Container}>
            <Icon name="close" color={"#262626"} size={30} onPress={() => handlePage()}/>
            <Image source={require ('@assets/image/icon/pana3.png')} style={style.image}/>
            <Text style={style.textLogin}>Lupa Password?</Text>
            <Text style={style.textSubLogin}>Kamu dapat mengatur ulang password di sini</Text>
            <Formik
                validationSchema={emailValidation}
                isValidating={true}
                initialValues={{ email: "" }}
                onSubmit={(values) => linkPassword(values)}
            >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                <InputData
                    placeholder='Email Kamu'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    isError={errors.email && touched.email}
                    errorMesage={errors.email}
                    style={style.input}
                />
                <View style={style.margin}>
                    <ButtonConfirm
                        label='Atur Ulang Password'
                        onPress={ () => handleSubmit()}
                    />
                </View>
                </>
            )}
            </Formik>
        </LinearGradient>
        <ModalSucces
            btn
            isVisible={visible}
            source={require ('@assets/image/icon/pana5.png')}
            label="Passwordmu Telah Diatur Ulang, Yuk Cek Emailmu!"
            styleImage={style.image2}
            onPress={() => setVisible(false)}
        />
        </>
    )
}

export default ForgotPassword;
const style = StyleSheet.create({
    Container: {
        flex: 1,
        padding: RFValue(20),
    },
    image: {
        width: '75%',
        height: '25%',
        alignSelf: 'center',
        marginTop: RFValue(5),
        marginBottom: RFValue(25)
    },
    image2: {
        width: '70%',
        height: '45%',
        marginBottom: RFValue(25)
    },
    textLogin: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: RFValue(22),
        color: 'black',
    },
    textSubLogin: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(12),
        color: 'black',
        marginBottom: RFValue(15)
    },
    input: {
        width: '100%',
        height: RFValue(48),
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: RFValue(10),
        paddingHorizontal: RFValue(10),
        fontFamily: 'Poppins-Regular',
        marginBottom: RFValue(15)
    },
    margin: {
        marginTop: RFValue(10),
        marginBottom: RFValue(15)
    },
    textRegist: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(11),
        color: '#262626',
        alignSelf: 'center'
    },
    textRegist2: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(11),
        color: '#9292E4',
        alignSelf: 'center'
    },
    textForgot: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(11),
        color: '#9292E4',
        alignSelf: 'center'
    }
})