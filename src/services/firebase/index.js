import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBPnYhV6IdEHhkSiiPbPnZTTYcbS0T-lic",
  authDomain: "jira-b4785.firebaseapp.com",
  projectId: "jira-b4785",
  storageBucket: "jira-b4785.appspot.com",
  messagingSenderId: "769883137200",
  appId: "1:769883137200:web:9fdc4bbba19e842e90c775",
  measurementId: "G-8V0Y234JY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export {
  db,
  auth,
  storage
}


