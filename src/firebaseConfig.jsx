
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy998ZMLVkQMg-mBRouD-bQxn9vFHipHI",
  authDomain: "react-dashboard-44c4f.firebaseapp.com",
  projectId: "react-dashboard-44c4f",
  storageBucket: "react-dashboard-44c4f.appspot.com",
  messagingSenderId: "284437421086",
  appId: "1:284437421086:web:0028ae5146817d1221620f",
  measurementId: "G-FHS59K5JML"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export {db};
