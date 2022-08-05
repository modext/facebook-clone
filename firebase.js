// import firebase from 'firebase'
// import 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAD-u4bI-tGPYmYyoIPW4IP6L-20WN_0YI",
    authDomain: "facebook-clone-5401c.firebaseapp.com",
    projectId: "facebook-clone-5401c",
    storageBucket: "facebook-clone-5401c.appspot.com",
    messagingSenderId: "370209791767",
    appId: "1:370209791767:web:bdd0b3a4fc9dc5c635a152"
  };

// const app = !firebase.app.length ? firebase.initializeApp
// (firebaseConfig) : firebase.app();

const app = initializeApp(firebaseConfig);

// const db = app.firestore();
const db = getFirestore(app);
// const storage = firebase.storage;
const storage = getStorage(app);

export { db, storage};