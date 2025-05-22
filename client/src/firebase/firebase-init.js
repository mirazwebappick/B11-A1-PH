import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBaWtjh7uCYxEGcRxU3V_EZB63yzs6anm4",
  authDomain: "b11-a10-gardening.firebaseapp.com",
  projectId: "b11-a10-gardening",
  storageBucket: "b11-a10-gardening.firebasestorage.app",
  messagingSenderId: "475603150012",
  appId: "1:475603150012:web:223ac77990ee2ee565dcb9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
