import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBCl_ODcFCf1J96M2U2GY0fY3t1HQ2E_2E",
  authDomain: "catch-of-the-day---master.firebaseapp.com",
  databaseURL: "https://catch-of-the-day---master-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day---master",
  storageBucket: "catch-of-the-day---master.appspot.com",
  messagingSenderId: "16948687250",
  appId: "1:16948687250:web:f5127a0990d1f6d425914b",
  measurementId: "G-4TXV8WHMH0",
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// this is a default export
export default base;
