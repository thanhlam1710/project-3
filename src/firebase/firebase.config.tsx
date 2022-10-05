// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8rDJK36PkfxlRexSigYv-bRCgK6bXmSA",
  authDomain: "project-2-dde92.firebaseapp.com",
  projectId: "project-2-dde92",
  storageBucket: "project-2-dde92.appspot.com",
  messagingSenderId: "418274323782",
  appId: "1:418274323782:web:a1fc6bd52a058ee7534947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);