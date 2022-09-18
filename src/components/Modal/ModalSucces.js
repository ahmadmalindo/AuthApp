import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";

const ModalSucces = (props) => {
    return (
        <Modal isVisible={props.isVisible}>
            <View style={style.modal}>
                <Image source={props.source} style={props.styleImage}/>
                <View style={{paddingHorizontal: RFValue(40)}}>
                    <Text style={style.text}>{props.label}</Text>
                </View>
                {props.btn &&
                    <TouchableOpacity style={style.button} onPress={props.onPress}>
                        <Text style={style.textConfirm}>OK</Text>
                    </TouchableOpacity>
                }
            </View>
        </Modal>
    )
}

export default ModalSucces;
const style = StyleSheet.create({
    modal: {
        width: '90%',
        height: '55%',
        backgroundColor: 'white',
        borderRadius: RFValue(10),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    image: {
        width: '70%',
        height: '70%',
        marginBottom: RFValue(-25)
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: RFValue(14),
        color: 'black',
        textAlign: 'center'
    },
    button: {
        width: '65%',
        height: RFValue(40),
        backgroundColor: '#262626',
        borderRadius: RFValue(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFValue(20)
    },
    textConfirm: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: RFValue(12),
        color: 'white'
    }
})