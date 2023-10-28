// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDRrnlzGEtpz_t2SN1thbs7yMPMNc4KdE8',
  authDomain: 'clone-f90e8.firebaseapp.com',
  projectId: 'clone-f90e8',
  storageBucket: 'clone-f90e8.appspot.com',
  messagingSenderId: '333888445861',
  appId: '1:333888445861:web:4c9c5025785348ca2edc4c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
