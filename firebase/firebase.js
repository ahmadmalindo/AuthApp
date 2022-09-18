import firebase from 'firebase';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyDsy4qQp0PYO_jfaSgyQ9vyUEb3HJ4hYao",
  authDomain: "auth-38edd.firebaseapp.com",
  databaseURL: "https://auth-38edd-default-rtdb.firebaseio.com",
  projectId: "auth-38edd",
  storageBucket: "auth-38edd.appspot.com",
  messagingSenderId: "350399117886",
  appId: "1:350399117886:web:f6dcc54c30976cbb1def6f",
  measurementId: "G-F0BN87GHLF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()