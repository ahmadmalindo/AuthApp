import { signIn } from "@constants/apiAuth";
import { SignIn } from "@actions"
import { ToastConnection, Notif } from '@constants'
import store from "@stores/store";
import MMKVStorage from "react-native-mmkv-storage";
import { Alert } from "react-native";

class AuthUtils {
    storage = new MMKVStorage.Loader().initialize()

    async signIn(params) {
        
        return params = await signIn(params).then((response) => {

            const res = response.data
            if(res.code == 200){
                this.storage.setItem('token', res.data.token)
                store.dispatch(SignIn(res.data))
                return 200
            } else {
                Alert.alert('Perhatian', res.message)
            }
        }).catch((error) => {
            ToastConnection('Data Anda tidak kami temukan')
        })
    }
}

const authUtils = new AuthUtils()

Object.freeze(authUtils)

export default authUtils