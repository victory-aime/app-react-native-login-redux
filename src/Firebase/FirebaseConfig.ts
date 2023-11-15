// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDV46jeDDCs-6D5qz4rrp6Bz-UEpll3ASI',
  authDomain: 'react-native-firebase-au-4bd45.firebaseapp.com',
  projectId: 'react-native-firebase-au-4bd45',
  storageBucket: 'react-native-firebase-au-4bd45.appspot.com',
  messagingSenderId: '887719449368',
  appId: '1:887719449368:web:f75c9fc5f23638a06f446d',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
