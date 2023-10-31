import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9DuUI61aRPaI17FBEQPivpaNzgYkJo3U",
  authDomain: "vite-pwa-eb4fe.firebaseapp.com",
  projectId: "vite-pwa-eb4fe",
  storageBucket: "vite-pwa-eb4fe.appspot.com",
  messagingSenderId: "510873709577",
  appId: "1:510873709577:web:047815f11c56b5b9a3dcd8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
