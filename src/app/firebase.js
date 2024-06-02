// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCP8k6rXkx8lazTORuz_cW9a_Rqe2nbhcQ",
  authDomain: "lista-casa-nova-9ed17.firebaseapp.com",
  projectId: "lista-casa-nova-9ed17",
  storageBucket: "lista-casa-nova-9ed17.appspot.com",
  messagingSenderId: "452091759444",
  appId: "1:452091759444:web:d20439d18bbf0210b896c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

