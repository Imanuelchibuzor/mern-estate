// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-431c5.firebaseapp.com",
  projectId: "mern-estate-431c5",
  storageBucket: "mern-estate-431c5.firebasestorage.app",
  messagingSenderId: "83148741505",
  appId: "1:83148741505:web:29c2672548e5af6c526680",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
