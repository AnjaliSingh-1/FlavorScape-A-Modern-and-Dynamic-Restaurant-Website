import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLn3zyQ4Yd-_Oq7HVHEUQdcziD6jVXbck",
  authDomain: "fullstack-food-app-df42f.firebaseapp.com",
  databaseURL: "https://fullstack-food-app-df42f-default-rtdb.firebaseio.com",
  projectId: "fullstack-food-app-df42f",
  storageBucket: "fullstack-food-app-df42f.appspot.com",
  messagingSenderId: "389499508123",
  appId: "1:389499508123:web:2434722b93a2c592a3fd3e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
