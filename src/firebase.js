import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDzbm9ghT52N7JyasEH4b5EQX3th50LK3k",
    authDomain: "unichat-6132d.firebaseapp.com",
    projectId: "unichat-6132d",
    storageBucket: "unichat-6132d.appspot.com",
    messagingSenderId: "389531581984",
    appId: "1:389531581984:web:a1b7548b2075c7533cc645"
  }).auth();