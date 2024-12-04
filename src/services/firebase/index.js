import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCtlQ4hvnIf8AlY4E1XXNmgXWem7AAXBuM",
  authDomain: "jira-e6351.firebaseapp.com",
  databaseURL: "https://jira-e6351-default-rtdb.firebaseio.com",
  projectId: "jira-e6351",
  storageBucket: "jira-e6351.firebasestorage.app",
  messagingSenderId: "465299756658",
  appId: "1:465299756658:web:3c1ed6221f3784e53854eb",
  measurementId: "G-VRKYFZQ0Y9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export {
  db,
  auth,
  storage
}
