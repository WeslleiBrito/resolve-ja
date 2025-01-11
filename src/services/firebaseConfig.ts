// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi8iqz06qAthG_DmbzW8Szxtt-BKGJQpk",
  authDomain: "resolveja-84e1c.firebaseapp.com",
  projectId: "resolveja-84e1c",
  storageBucket: "resolveja-84e1c.firebasestorage.app",
  messagingSenderId: "606766991331",
  appId: "1:606766991331:web:0f09e617415fecbe65c2d6",
  measurementId: "G-ZGV4V0DZPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app)
export const storage = getStorage(app)

