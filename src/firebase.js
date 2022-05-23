// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLsf7FQcfLf0cUgXVuJbOXw1hA01QTHzI",
    authDomain: "clone-9436b.firebaseapp.com",
    projectId: "clone-9436b",
    storageBucket: "clone-9436b.appspot.com",
    messagingSenderId: "597706231321",
    appId: "1:597706231321:web:97d88277e351d1c364e488",
    measurementId: "G-ENXYGRP5M6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}