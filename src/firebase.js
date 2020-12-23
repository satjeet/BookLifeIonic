import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import "firebase/admin";

const firebaseConfig = {
  apiKey: "AIzaSyAdyMAttp-fRjm2Q3MZz09Ig6lw76HSS6M",
  authDomain: "momentosdiarios.firebaseapp.com",
  databaseURL: "https://momentosdiarios.firebaseio.com",
  projectId: "momentosdiarios",
  storageBucket: "momentosdiarios.appspot.com",
  messagingSenderId: "389871679287",
  appId: "1:389871679287:web:39fbe15c5f9480eb528cb2"
};



firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
//const admin = firebase.admin();


export { db, auth };
