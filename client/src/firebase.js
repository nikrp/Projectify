// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVytIPK7belHLr45IUp0jCahR9W_yvTLk",
  authDomain: "projectify-6cdc0.firebaseapp.com",
  projectId: "projectify-6cdc0",
  storageBucket: "projectify-6cdc0.appspot.com",
  messagingSenderId: "501262046867",
  appId: "1:501262046867:web:6398181b96ba7f56b0df66",
  measurementId: "G-3FKYD2RB4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }