// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librarie
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM7mtShupysJiLQXYGHn9UgFtVoex-WsQ",
  authDomain: "yumyum-3348c.firebaseapp.com",
  projectId: "yumyum-3348c",
  storageBucket: "yumyum-3348c.appspot.com",
  messagingSenderId: "217704042465",
  appId: "1:217704042465:web:0ffe77d733ee1b1680cca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)