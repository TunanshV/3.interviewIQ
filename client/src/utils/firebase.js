
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ce7fe.firebaseapp.com",
  projectId: "interviewiq-ce7fe",
  storageBucket: "interviewiq-ce7fe.firebasestorage.app",
  messagingSenderId: "127416422426",
  appId: "1:127416422426:web:f31284c0dc348b9f38c1a3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}