// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAPvvr6NxEHdIhxnZRbWn9hKbWbWi-nJp8",
//   authDomain: "jira-cff57.firebaseapp.com",
//   databaseURL: "https://jira-cff57-default-rtdb.firebaseio.com",
//   projectId: "jira-cff57",
//   storageBucket: "jira-cff57.appspot.com",
//   messagingSenderId: "364550409406",
//   appId: "1:364550409406:web:1bd8ebc1ffa7867f37e2ef",
//   measurementId: "G-SHFX4FER0S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export {
//     db,
//     auth
// }

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm6UJlWhtx6h72v9hTt_ReNMND4uJugDo",
  authDomain: "jira-49918.firebaseapp.com",
  databaseURL: "https://jira-49918-default-rtdb.firebaseio.com",
  projectId: "jira-49918",
  storageBucket: "jira-49918.appspot.com",
  messagingSenderId: "157229541340",
  appId: "1:157229541340:web:addd34a86214b96372d119",
  measurementId: "G-45QFREENZT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
}