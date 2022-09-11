import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6b2EWTdbKn66LZ-4b3PWRjONZYIvhirM",
    authDomain: "galaxy-synthetic-company.firebaseapp.com",
    projectId: "galaxy-synthetic-company",
    storageBucket: "galaxy-synthetic-company.appspot.com",
    messagingSenderId: "60746937875",
    appId: "1:60746937875:web:e9d02008b155fe9354f1e6",
    measurementId: "G-9E65XWMFLR"
  };
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
