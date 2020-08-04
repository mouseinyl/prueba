import firebase from "firebase";

import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDlgFv7lVgy8eeyRAvgQTWs_6krDt13fBI",
    authDomain: "vue-firebase-aef40.firebaseapp.com",
    databaseURL: "https://vue-firebase-aef40.firebaseio.com",
    projectId: "vue-firebase-aef40",
    storageBucket: "vue-firebase-aef40.appspot.com",
    messagingSenderId: "807701923766",
    appId: "1:807701923766:web:9342e4f0f37bac668da317",
    measurementId: "G-GM20PRTYBS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// autetification
const auth = firebase.auth;


// 
const db = firebase.firestore()

export default {
    db,
    auth
}