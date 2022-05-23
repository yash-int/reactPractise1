import firebase from "firebase"
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

 export const db = firebaseApp.firestore();
 export const auth = firebase.auth();

