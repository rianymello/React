import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyByRPP0BgvNIcRzAvNcq_Lepijtou8o-Sw",
    authDomain: "letmeask-10f50.firebaseapp.com",
    databaseURL: "https://letmeask-10f50-default-rtdb.firebaseio.com",
    projectId: "letmeask-10f50",
    storageBucket: "letmeask-10f50.appspot.com",
    messagingSenderId: "385244582747",
    appId: "1:385244582747:web:077444eea3ca17221d007e"
  };

  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database(); 