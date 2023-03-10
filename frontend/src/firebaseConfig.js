// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyB5eYkK0sDEhP7GHflnpqzv2VvT1QIE-94",
  authDomain: "quiz-e29a0.firebaseapp.com",
  databaseURL: "https://quiz-e29a0-default-rtdb.firebaseio.com",
  projectId: "quiz-e29a0",
  storageBucket: "quiz-e29a0.appspot.com",
  messagingSenderId: "1060521512666",
  appId: "1:1060521512666:web:0d95908374a0d998e31fe3",
  measurementId: "G-8TV2E61GLZ"
};
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);