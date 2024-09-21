import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZqRk3bplPsLPgTa-4XiQ3InpPIRVZvqQ",
  authDomain: "formnighbat.firebaseapp.com",
  projectId: "formnighbat",
  storageBucket: "formnighbat.appspot.com",
  messagingSenderId: "175800014610",
  appId: "1:175800014610:web:d3ab8976ad39c6ab5645cb",
  measurementId: "G-BG9PD7SHM9"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
