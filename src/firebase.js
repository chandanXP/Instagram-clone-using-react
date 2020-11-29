// import firebase from "firebase/app";

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyAgJj7Y2Jz45bJsWSM_hR68DgsZPF6i4I8",
     authDomain: "instagram-clone2209.firebaseapp.com",
     databaseURL: "https://instagram-clone2209.firebaseio.com",
     projectId: "instagram-clone2209",
     storageBucket: "instagram-clone2209.appspot.com",
     messagingSenderId: "1079049896838",
     appId: "1:1079049896838:web:1550d76415b8e5a4c26207",
     measurementId: "G-XRXB0GL1Y2"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};