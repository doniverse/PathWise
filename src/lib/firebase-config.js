// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfw_y48KYQ67wdBIqN06pxSGZ55zw8R1U",
  authDomain: "pathwise-cd435.firebaseapp.com",
  projectId: "pathwise-cd435",
  storageBucket: "pathwise-cd435.appspot.com",
  messagingSenderId: "745667518319",
  appId: "1:745667518319:web:f0fedd14ca8e083277d29a",
  measurementId: "G-9MQFBPE9JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
