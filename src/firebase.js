import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA02f8ov3PQPronn6i0zXNEyI91PU7b-S0",
  authDomain: "imshahanwaz.firebaseapp.com",
  projectId: "imshahanwaz",
  storageBucket: "imshahanwaz.appspot.com",
  messagingSenderId: "479909401213",
  appId: "1:479909401213:web:f3b797e0fc4961e0439714",
  measurementId: "G-DRT8RTM1K1",
});

export const db = firebaseApp.firestore();
