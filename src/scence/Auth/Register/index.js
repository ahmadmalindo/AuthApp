import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
import { InputData, ButtonConfirm, ModalSucces } from '@components';
import { ScrollView } from "react-native-gesture-handler";
import { auth } from '../../../../firebase/firebase';
import { Formik } from 'formik';
import * as yup from 'yup';
import Modal from "react-native-modal";

function Register({ navigation }){

    const [ show, setShow ] = useState(true)
    const [ showConfirm, setShowConfirm ] = useState(true)
    const [ visible, setVisible ] = useState(false)

    const registerValidation = yup.object().shape({
      username: yup
          .string()
          .min(3, ({ min }) => `Username minimal ${min} karakter`)
          .max(50, ({ max }) => `Username minimal ${max} karakter` ) 
          .required('Username harus diisi'),
      email: yup
          .string() 
          .email('Format tidak email sesuai')
          .required('Email tidak boleh kosong'),
      password: yup
          .string()
          .min(8, ({ min }) => `Password minimal ${min} karakter`)
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "Password Harus Mengandung Huruf Besar, Huruf Kecil dan Angka")
          .required('Password tidak boleh kosong'),
      confirmPassword: yup
          .string()
          .min(8, ({ min }) => `Password minimal ${min} karakter`)
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "Password Harus Mengandung Huruf Besar, Huruf Kecil dan Angka")
          .oneOf([yup.ref('password'), null], 'Password Harus Sama')
          .required('Password tidak boleh kosong'),
    })

    const handlePage = () => {

        navigation.navigate('login')
    }

    const handleSignUp = (values) => {

        auth
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((res) => {
                res.user.updateProfile({
                    displayName: values.username,
                })
                setVisible(true)
                setTimeout(() => {
                    navigation.navigate('login')
                    setVisible(false)
                }, 2000)
                console.log(res)
            })
            .catch((err) => {

                if (err.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (err.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(err);
            }
            )
    }

    return (
        <>
        <ScrollView style={{flex: 1}}>
        <LinearGradient colors={['#FBFBFB', '#FAFAFA']} style={style.Container}>
            <Icon name="chevron-back" color={"#262626"} size={30} onPress={() => handlePage() }/>
            <Image source={require ('@assets/image/icon/pana2.png')} style={style.image}/>
            <Text style={style.textLogin}>Selamat Datang!</Text>
            <Text style={style.textSubLogin}>Lengkapi data berikut dan akunmu akan terbuat</Text>
            <Formik
                validationSchema={registerValidation}
                isValidating={true}
                initialValues={{ username: "", email: "", password: "", confirmPassword: "" }}
                onSubmit={(values) => handleSignUp(values)}
            >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                <InputData
                    placeholder='Username'
                    value={values.username}
                    onChangeText={handleChange('username')}
                    isError={errors.username && touched.username}
                    errorMesage={errors.username}
                    style={style.input}
                />
                <InputData
                    placeholder='Email'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    isError={errors.email && touched.email}
                    errorMesage={errors.email}
                    style={style.input}
                />
                <InputData
                    password
                    placeholder='Password'
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry={show}
                    onPress={() => setShow(!show)}
                    isError={errors.password && touched.password}
                    errorMesage={errors.password}
                    style={style.input}
                />
                <InputData
                    password
                    placeholder='Confirm Password'
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    secureTextEntry={showConfirm}
                    onPress={() => setShowConfirm(!showConfirm)}
                    isError={errors.confirmPassword && touched.confirmPassword}
                    errorMesage={errors.confirmPassword}
                    style={style.input}
                />
                <View style={style.margin}>
                    <ButtonConfirm
                        label='Buat Akun'
                        onPress={ () => handleSubmit()}
                    />
                </View>
                </>
            )}
            </Formik>
            <Text style={style.textRegist}>Sudah Punya Akun? <Text onPress={() => handlePage()} style={style.textRegist2}>Masuk di sini</Text></Text>
        </LinearGradient>
        </ScrollView>
        <ModalSucces
            isVisible={visible}
            source={require ('@assets/image/icon/pana4.png')}
            label="Yeay Kamu Berhasil Membuat Akun!"
        />
        </>
    )
}

export default Register;
const style = StyleSheet.create({
    Container: {
        flex: 1,
        padding: RFValue(20),
        marginBottom: RFValue(180)
    },
    image: {
        width: '100%',
        height: '30%',
        alignSelf: 'center',
        marginTop: RFValue(15),
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