// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from "firebase/auth";
import { getFirestore,collection, addDoc, getDocs } from "firebase/firestore";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsq8yx4b5_9_AQ9aue-OFOlFfw8_TIFZU",
  authDomain: "spellwizard-a6670.firebaseapp.com",
  projectId: "spellwizard-a6670",
  storageBucket: "spellwizard-a6670.appspot.com",
  messagingSenderId: "1062598862748",
  appId: "1:1062598862748:web:556f1f987c61f34fa38a59",
  measurementId: "G-86R1QCX579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export {db, getFirestore, collection, addDoc, getDocs};