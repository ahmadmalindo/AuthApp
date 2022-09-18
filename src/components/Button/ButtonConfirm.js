import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator, TextInput } from "react-native"
import { RFValue } from "react-native-responsive-fontsize";

const ButtonConfirm = (props) => {

    return (
        <TouchableOpacity style={style.button} onPress={props.onPress}>
            <Text style={style.textConfirm}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonConfirm;
const style = StyleSheet.create({
    button: {
        width: '100%',
        height: RFValue(40),
        backgroundColor: '#262626',
        borderRadius: RFValue(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textConfirm: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: RFValue(12),
        color: 'white'
    }
})