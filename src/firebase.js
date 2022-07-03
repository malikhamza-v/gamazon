import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF0774uBuZte7PpOxuIjmRnNOxjH99kV4",
  authDomain: "g-85e68.firebaseapp.com",
  projectId: "g-85e68",
  storageBucket: "g-85e68.appspot.com",
  messagingSenderId: "1049809172984",
  appId: "1:1049809172984:web:82f48038b7de340827be0d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

//firestore is the real time database in firebase

const auth = firebase.auth();

export { db, auth };
