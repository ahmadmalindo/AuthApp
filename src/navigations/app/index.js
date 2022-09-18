import { createStackNavigator } from "react-navigation-stack";

import { 
    Login,
    ForgotPassword,
    Register,
    Dashboard
} from "../../scence/index";
import Tabs from '../Tabs'

const AppNavigatorConfig = {
    initialRouteName: "login",
    headerMode: "none"
}

const RouteConfigs = {
    login: Login,
    register: Register,
    forgotpassword: ForgotPassword,
    dashboard: Dashboard
}

export default createStackNavigator(RouteConfigs, AppNavigatorConfig);