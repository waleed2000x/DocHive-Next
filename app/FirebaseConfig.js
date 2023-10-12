"use client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "dochive.firebaseapp.com",
  projectId: "dochive",
  storageBucket: "dochive.appspot.com",
  messagingSenderId: "1059928235254",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-90KD8KTMC0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
