// import { createBottomTabNavigator } from "react-navigation-tabs";
// import React from "react";
// import { View, Text, Image } from "react-native";
// import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
// import { Dashboard } from "../../scence";


// const TabNavigatorConfig = {
//     tabBarOptions: {
//         activeTintColor: '#262626',
//         inactiveTintColor: '#B4B4B4',
//         showLabel: false,
//         style: {
//             height: RFValue(55),
//             backgroundColor:'white',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             borderTopWidth: 1,
//             borderTopColor: '#E7E7E7',
//             position: 'absolute',
//             paddingTop: RFValue(12),
//             paddingBottom: RFValue(5),
//         },
//         tabBarPosition: "bottom",
//         animationEnabled: true,
//         swipeEnabled: true,
//         unmountInactiveRoutes: true,
//     },
 
//     defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused }) => {
//             const { routeName } = navigation.state;
//             switch(routeName){
//                 case 'home':
//                     return <View style={style.menu}>
//                         {/* <Image style={style.icon} source={focused ? require ('@assets/image/imageBottom/homefilled.png') : require ('@assets/image/imageBottom/home.png')} ></Image> */}
//                         <Text style={ focused ? style.labelColor : style.label }>Home</Text>
//                     </View>
//                     break;
//                 // case 'transaksi':
//                 //     return <View style={style.menu}>
//                 //         {/* <Image source={focused ? require ('@assets/image/imageBottom/transactionfilled.png') : require ('@assets/image/imageBottom/transaction.png')}></Image> */}
//                 //         <Text style={ focused ? style.labelColor : style.label }>Transaksi</Text>
//                 //     </View>
//                 //     break;
//                 // case 'kunjungan':
//                 //     return <View style={style.menu}>
//                 //         {/* <Image source={focused ? require ('@assets/image/imageBottom/visitorfilled.png') : require ('@assets/image/imageBottom/visitor.png')}></Image> */}
//                 //         <Text style={ focused ? style.labelColor : style.label }>Kunjungan</Text>
//                 //     </View>
//                 //     break;  
//                 // case 'akun':
//                 //     return <View style={style.menu}>
//                 //         {/* <Image source={focused ? require('@assets/image/imageBottom/accountfilled.png') : require ('@assets/image/imageBottom/account.png')}></Image> */}
//                 //         <Text style={ focused ? style.labelColor : style.label }>Akun</Text>
//                 //     </View>
//                 //     break;      
//             }
            
//         },
//     }),
// }

// const RouteConfigs = {
//     home: {
//         screen: Dashboard,
//         navigationOptions: {
//             tabBarLabel: "Home",
//         }
        
//     },
//     // transaksi:    {
//     //     screen: Transaction,
//     //     navigationOptions: {
//     //         tabBarLabel: "Transaksi",
//     //     }
        
//     // },
//     // kunjungan:    {
//     //     screen: Visitor,
//     //     navigationOptions: {
//     //         tabBarLabel: "Kunjungan",
//     //     }
        
//     // },
//     // akun:    {
//     //     screen: Account,
//     //     navigationOptions: {
//     //         tabBarLabel: "Akun",
//     //     }
        
//     // },
    
// }
// export default createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

// const style = ({
//     icon:{
        
//     },
//     menu:{
//         flex : 1,
//         alignItems: 'center',
//     },
//     labelColor:{
//         marginTop: RFValue(3),
//         fontSize: RFValue(10),
//         color: '#E0004D',
//         fontFamily: 'Poppins'
//     },
//     label :{
//         marginTop: RFValue(3),
//         fontSize: RFValue(10),
//         color: '#C9CBDA',
//         fontFamily: 'Poppins'
//     },


// })
