import Axios from "axios";
import { base_url_node_v2 } from "@constants/BASE_URL";


export const signIn             = payload =>  Axios.post(`${base_url_node_v2}/auth/login/login`, payload)
