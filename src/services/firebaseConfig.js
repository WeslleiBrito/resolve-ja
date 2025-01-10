// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDi8iqz06qAthG_DmbzW8Szxtt-BKGJQpk",
  authDomain: "resolveja-84e1c.firebaseapp.com",
  projectId: "resolveja-84e1c",
  storageBucket: "resolveja-84e1c.firebasestorage.app",
  messagingSenderId: "606766991331",
  appId: "1:606766991331:web:0f09e617415fecbe65c2d6",
  measurementId: "G-ZGV4V0DZPN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

