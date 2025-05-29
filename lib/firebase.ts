// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkFB8pn50UvT0xDFLAin_QJgS3JgsEuco",
  authDomain: "marmoleria-web.firebaseapp.com",
  projectId: "marmoleria-web",
  storageBucket: "marmoleria-web.appspot.com",
  messagingSenderId: "266271431991",
  appId: "1:266271431991:web:9abd2dbb3d9e649457ceb2",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
