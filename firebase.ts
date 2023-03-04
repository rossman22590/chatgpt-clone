import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTt9MUsBGYX_I4GUL3btHsy5pdL_RQma4",
  authDomain: "chat-gpt-dde2a.firebaseapp.com",
  projectId: "chat-gpt-dde2a",
  storageBucket: "chat-gpt-dde2a.appspot.com",
  messagingSenderId: "991088561153",
  appId: "1:991088561153:web:3563d7d2737a5475950400",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db};
