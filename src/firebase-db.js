import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
   apiKey: "AIzaSyA_4l4Y7wA34IypZzEzTYuBp-NucMSCQR0",
    authDomain: "digital-startup-a4ef8.firebaseapp.com",
    databaseURL: "https://digital-startup-a4ef8.firebaseio.com",
    projectId: "digital-startup-a4ef8",
    storageBucket: "digital-startup-a4ef8.appspot.com",
    messagingSenderId: "282494325930",
    appId: "1:282494325930:web:42846aacb22e337cc22cd3"
  })
  .firestore();

export const postRef = db.collection("items");