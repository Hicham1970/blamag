
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blamag.firebaseapp.com",
  projectId: "blamag",
  storageBucket: "blamag.firebasestorage.app",
  messagingSenderId: "861423725782",
  appId: "1:861423725782:web:1b8b3f8fa024fc76a1ed77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

