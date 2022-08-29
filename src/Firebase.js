import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSNvxat4TlCzcy_FQrdWhiSuLMMf0_Eqo",
  authDomain: "corralon-santiago.firebaseapp.com",
  projectId: "corralon-santiago",
  storageBucket: "corralon-santiago.appspot.com",
  messagingSenderId: "990076421833",
  appId: "1:990076421833:web:41739efa7128678e30ef18"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

console.log(db)