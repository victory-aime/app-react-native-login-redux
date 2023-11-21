// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRAK1otYMBucflyfZUmFcB9WlSkbRcZ9w',
  authDomain: 'proxym-react-native.firebaseapp.com',
  projectId: 'proxym-react-native',
  storageBucket: 'proxym-react-native.appspot.com',
  messagingSenderId: '235188946213',
  appId: '1:235188946213:web:6f3f8d3702eed56b5686cc',
};

// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
