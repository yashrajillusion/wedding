import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqW1_TkUvAXwBH8LJ6kLvsN_0m2NzBhpE",
  authDomain: "fir-crud-auth-4af2c.firebaseapp.com",
  projectId: "fir-crud-auth-4af2c",
  storageBucket: "fir-crud-auth-4af2c.appspot.com",
  messagingSenderId: "991088797722",
  appId: "1:991088797722:web:fec5557537912b87c6c9a3",
  measurementId: "G-Q2XZHXE6EJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

