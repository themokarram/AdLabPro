import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEWMIn-EjSw7CNyuiCl8Ihn7QCELgZyl8",
  authDomain: "adlabpro-mokarram.firebaseapp.com",
  projectId: "adlabpro-mokarram",
  storageBucket: "adlabpro-mokarram.appspot.com",
  messagingSenderId: "770703930436",
  appId: "1:770703930436:web:cca208634a2213d196b811"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore()