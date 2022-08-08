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
//   const firebaseConfig = {
//     apiKey: "AIzaSyA46DpxwzVn-dZfX0Fc21fTDVbIfZi-uZ0",
//     authDomain: "facebook2-1e804.firebaseapp.com",
//     projectId: "facebook2-1e804",
//     storageBucket: "facebook2-1e804.appspot.com",
//     messagingSenderId: "711910915796",
//     appId: "1:711910915796:web:30591bfd17689a3be30541"
//     };
// const firebaseConfig = {
//   apiKey: "AIzaSyAD-u4bI-tGPYmYyoIPW4IP6L-20WN_0YI",
//   authDomain: "facebook-clone-5401c.firebaseapp.com",
//   projectId: "facebook-clone-5401c",
//   storageBucket: "facebook-clone-5401c.appspot.com",
//   messagingSenderId: "370209791767",
//   appId: "1:370209791767:web:ef065643b575690d35a152"
// };

// const app = !firebase.app.length ? firebase.initializeApp
// (firebaseConfig) : firebase.app();

const app = initializeApp(firebaseConfig);

// const db = app.firestore();
const db = getFirestore(app);

// const storage = firebase.storage;
const storage = getStorage(app);

export { db, storage};