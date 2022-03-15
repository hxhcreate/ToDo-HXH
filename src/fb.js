// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB34i_xXGscyGUK7eAZlX4frS2pTnx2rEo",
    authDomain: "todo-hxh.firebaseapp.com",
    projectId: "todo-hxh",
    storageBucket: "todo-hxh.appspot.com",
    messagingSenderId: "1003403298060",
    appId: "1:1003403298060:web:45d439433d0cc7ec6a7529",
    measurementId: "G-2271W4R99G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db;

