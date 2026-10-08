import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const apikey = process.env.API_KEY;

const firebaseConfig = {
  apiKey: apikey,
  authDomain: "smit-practice-project-94561.firebaseapp.com",
  databaseURL:
    "https://smit-practice-project-94561-default-rtdb.firebaseio.com",
  projectId: "smit-practice-project-94561",
  storageBucket: "smit-practice-project-94561.firebasestorage.app",
  messagingSenderId: "374638345873",
  appId: "1:374638345873:web:c881d4a8d292dc43524930",
  measurementId: "G-05G7BLQMZE",
};

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
