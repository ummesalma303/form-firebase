// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgM1otnbVZQQy4rUbwCZIZEmk-DQkc42A",
  authDomain: "form-firebase-f4a9c.firebaseapp.com",
  projectId: "form-firebase-f4a9c",
  storageBucket: "form-firebase-f4a9c.firebasestorage.app",
  messagingSenderId: "561446050271",
  appId: "1:561446050271:web:c4fe45fb2ae14309cccc6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);