// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClMgxltRfjU_hvT9C1H3Reaqf2TQRwT88",
  authDomain: "influencer-platform-60b03.firebaseapp.com",
  projectId: "influencer-platform-60b03",
  storageBucket: "influencer-platform-60b03.firebasestorage.app",
  messagingSenderId: "399710344337",
  appId: "1:399710344337:web:ba44619cd2a4a1e8ed5b30",
  measurementId: "G-94GNEV7RPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore, Auth, and Storage instances
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export the instances
export { db, auth, storage };
// SomeComponent.js (or wherever you want to use the Firebase auth functions)
import { auth } from './firebase'; // Import the initialized auth instance
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Function to create a new user
async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created: ', userCredential.user);
  } catch (error) {
    console.error(error.message);
  }
}

// Function to sign in an existing user
async function signInUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in: ', userCredential.user);
  } catch (error) {
    console.error(error.message);
  }
}
