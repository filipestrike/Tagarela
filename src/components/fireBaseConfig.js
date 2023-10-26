import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4PntKG5h-Zn_yEoH2pY67xLiLKkmkOkQ",
  authDomain: "tagarela-f9f54.firebaseapp.com",
  projectId: "tagarela-f9f54",
  storageBucket: "tagarela-f9f54.appspot.com",
  messagingSenderId: "702031512086",
  appId: "1:702031512086:web:d2a5929526a8ab0a4e2b37",
  measurementId: "G-88T06FBWVY",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
