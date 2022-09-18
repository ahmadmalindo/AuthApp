import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
import { InputData, ButtonConfirm } from '@components';
import { auth } from '../../../../firebase/firebase';
import { Formik } from 'formik';
import * as yup from 'yup';
import store from "@stores/store";
import { SignIn } from "@actions/AuthAction";
import MMKVStorage from "react-native-mmkv-storage";
import Modal from "react-native-modal";

function Login({ navigation }){

    const [ show, setShow ] = useState(true);
    const [ visible, setVisible ] = useState(false)

    const storage = new MMKVStorage.Loader().initialize()

    const loginValidation = yup.object().shape({
      email: yup
          .string() 
          .email('Format tidak email sesuai')
          .required('Email tidak boleh kosong'),
      password: yup
          .string()
          .min(8, ({ min }) => `Password minimal ${min} karakter`)
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "Password Harus Mengandung Huruf Besar, Huruf Kecil dan Angka")
          .required('Password tidak boleh kosong'),
    })

    const handlePage = (val) => {
        
        if (val == 1) {
            navigation.navigate('register')
        }
        else {
            navigation.navigate('forgotpassword')
        }
    }

    const signIn = (values) => {

        auth
            .signInWithEmailAndPassword(values.email, values.password)
            .then((res) => {
                setVisible(true)
                storage.setItem('token', res.user.uid)
                store.dispatch(SignIn(res))
                setTimeout(() => {
                    navigation.navigate('dashboard')
                    setVisible(false)
                }, 1000)
                console.log(res)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <>
        <LinearGradient colors={['#FBFBFB', '#FAFAFA']} style={style.Container}>
            <Icon name="chevron-back" color={"white"} size={30}/>
            <Image source={require ('@assets/image/icon/pana.png')} style={style.image}/>
            <Text style={style.textLogin}>Login</Text>
            <Text style={style.textSubLogin}>Masukkan email dan password kamu</Text>
            <Formik 
                validationSchema={loginValidation}
                isValidating={true}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => signIn(values)}
            >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                <InputData
                    placeholder='Email'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    isError={errors.email && touched.email}
                    style={style.input}
                    errorMesage={errors.email}
                />
                <InputData
                    password
                    placeholder='Password'
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry={show}
                    isError={errors.password && touched.password}
                    errorMesage={errors.password}
                    onPress={() => setShow(!show)}
                    style={style.input}
                />
            <View style={style.margin}>
                <ButtonConfirm
                    label='Masuk'
                    onPress={ () => handleSubmit()}
                />
            </View>
            </>
            )}
            </Formik>
            <Text style={style.textRegist}>Belum Punya Akun? <Text onPress={() => handlePage(1)} style={style.textRegist2}>Daftar di sini</Text></Text>
            <Text onPress={() => handlePage(2)} style={style.textForgot}>Lupa Password?</Text>
        </LinearGradient>
        <Modal isVisible={visible}>
            <ActivityIndicator color={'white'} size={'large'}/>
        </Modal>
        </>
    )
}

export default Login;
const style = StyleSheet.create({
    Container: {
        flex: 1,
        padding: RFValue(20),
    },
    image: {
        width: '65%',
        height: '30%',
        alignSelf: 'center',
        marginTop: RFValue(5),
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