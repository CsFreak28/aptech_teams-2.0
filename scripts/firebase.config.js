// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWgc2BoA_H4QDyRF4yy6d31L1Oxx3ZADk",
  authDomain: "aptech-teams.firebaseapp.com",
  projectId: "aptech-teams",
  storageBucket: "aptech-teams.appspot.com",
  messagingSenderId: "450426532860",
  appId: "1:450426532860:web:baeb16639143d4a239f879",
};

// Initialize Firebase
//initialize every firebase service we will use in the project
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
