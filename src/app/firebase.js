// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyAg9ntciRSwjbhsLFHKpMmc6g8vggctKbc",
  authDomain: "lista-de-presentes-b52e3.firebaseapp.com",
  projectId: "lista-de-presentes-b52e3",
  storageBucket: "lista-de-presentes-b52e3.appspot.com",
  messagingSenderId: "7697554342",
  appId: "1:7697554342:web:2ff227038a11a002734d67",
  measurementId: "G-2CP9MFDDZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

