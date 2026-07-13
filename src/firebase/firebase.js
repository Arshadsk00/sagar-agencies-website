// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcV6mSMHO_jR4osvoREswWUbUpnUgoKtQ",
  authDomain: "sagar-agencies-5c40d.firebaseapp.com",
  projectId: "sagar-agencies-5c40d",
  storageBucket: "sagar-agencies-5c40d.firebasestorage.app",
  messagingSenderId: "288394172016",
  appId: "1:288394172016:web:8d75b93480b0b7a25806b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;