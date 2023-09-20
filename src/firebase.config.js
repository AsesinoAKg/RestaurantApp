import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiz1abbYaO8Uq_o0E2wlmaJJ4oMKt7a5E",
  authDomain: "restaurant-24dd6.firebaseapp.com",
  databaseURL: "https://restaurant-24dd6-default-rtdb.firebaseio.com",
  projectId: "restaurant-24dd6",
  storageBucket: "restaurant-24dd6.appspot.com",
  messagingSenderId: "807543841094",
  appId: "1:807543841094:web:7fc353efb13030ec528547",
  measurementId: "G-L4S8D6JS1Y"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
