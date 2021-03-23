import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrbdzfUsKjgJGRZ44-Jm2qn98Vuwokp9k",
  authDomain: "clone-f2289.firebaseapp.com",
  projectId: "clone-f2289",
  storageBucket: "clone-f2289.appspot.com",
  messagingSenderId: "281164463803",
  appId: "1:281164463803:web:9963a4d93401ad1260f39e",
  measurementId: "G-30Z4X10QLJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
