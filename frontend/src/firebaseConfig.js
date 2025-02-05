// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyA2sDwBUtOV7X0-M_708osDCO1YiZ7FctQ",
  authDomain: "social-engineering-silmulator.firebaseapp.com",
  projectId: "social-engineering-silmulator",
  storageBucket: "social-engineering-silmulator.firebasestorage.app",
  messagingSenderId: "551175613245",
  appId: "1:551175613245:web:edc920f072f0d6f8ef7354",
  measurementId: "G-MHS1FMQCTJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
