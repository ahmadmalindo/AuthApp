import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator, TextInput } from "react-native"
import { RFValue } from "react-native-responsive-fontsize";

const InputData = (props) => {

    return (
        <View>
            <TextInput
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                style={props.style}
            />
            {props.password &&
            <TouchableOpacity style={style.showPassword} onPress={props.onPress}>
                <Text style={style.textShow}>show</Text>
            </TouchableOpacity>
            }
            {props.isError ?
            <Text style={style.textError}>{props.errorMesage}</Text>
            : null}
        </View>
    )
}

export default InputData;
const style = StyleSheet.create({
    textError: {
        fontFamily: 'Poppins-Regular',
        fontSize: RFValue(10),
        color: '#E63350',
        marginTop: RFValue(-10),
        marginLeft: RFValue(10),
        marginBottom: RFValue(10)
    },
    showPassword: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: RFValue(15),
        right: RFValue(15)
        // backgroundColor: 'red'
    },
    textShow: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: RFValue(12),
        color: '#9292E4',
    }
})