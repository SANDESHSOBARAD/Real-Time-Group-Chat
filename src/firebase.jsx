
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzCh6XZmlW7SQwEMTe94KjAA3CJclPFQo",
  authDomain: "groupchat-c9b85.firebaseapp.com",
  projectId: "groupchat-c9b85",
  storageBucket: "groupchat-c9b85.firebasestorage.app",
  messagingSenderId: "168904731084",
  appId: "1:168904731084:web:3236f8152226b856e45569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);