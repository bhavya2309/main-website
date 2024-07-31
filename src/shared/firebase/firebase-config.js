// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBANreDqES68bSHawGkUF-kGR3i0043ha4",
  authDomain: "pizza-app-92b6e.firebaseapp.com",
  projectId: "pizza-app-92b6e",
  storageBucket: "pizza-app-92b6e.appspot.com",
  messagingSenderId: "215816502179",
  appId: "1:215816502179:web:c1967c44e4aa4d4059b816",
  measurementId: "G-RQGMCY8D0K"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);