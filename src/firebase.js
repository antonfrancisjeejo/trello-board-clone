import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzaQW3oTaKuTNMm3sqLRNFsovOaEaLsQI",
  authDomain: "trello-board-clone-adb08.firebaseapp.com",
  projectId: "trello-board-clone-adb08",
  storageBucket: "trello-board-clone-adb08.appspot.com",
  messagingSenderId: "176189081889",
  appId: "1:176189081889:web:4aa7cd16dded51d484d660",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, db, timestamp };
