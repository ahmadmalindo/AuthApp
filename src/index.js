import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import MMKVStorage from 'react-native-mmkv-storage';
import Animated, { BounceIn, BounceInDown, BounceOut, SlideInDown } from 'react-native-reanimated';

class AuthCheck extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }

    performTimeConsumingTask = async () => {
        return new Promise(resolve =>
            setTimeout(() => {
                resolve('result');
            }, 1000),
        );
    };

    async componentDidMount() {

        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            const storage = new MMKVStorage.Loader().initialize();

            const session = await storage.getItem('token'); 

            this.props.navigation.navigate(session ? 'dashboard' : 'dashboard')
        }
    }

    render() {
        return (
            <View style={style.container}>
                <Animated.View style={style.content} entering={BounceIn}>
                    {/* <Image source={require ('@assets/image/examplelogo.png')} style={style.image}/> */}
                </Animated.View>
            </View>
        );
    }
}

export default connect(null, null)(AuthCheck);
const style= StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#E63350',
    },
    image: {
        width: '47%',
        height: '10%'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        height: RFValue(700)
    }
})