// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAacluA2J07YTeb4bgN5diL9z6JklYEvEc",
  authDomain: "p-project-afc0d.firebaseapp.com",
  projectId: "p-project-afc0d",
  storageBucket: "p-project-afc0d.firebasestorage.app",
  messagingSenderId: "736604211609",
  appId: "1:736604211609:web:98c57161b1674b5681eb08",
  measurementId: "G-CBPQCWLPKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);