import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRkVErTexFCsPdapcug7gsesuzoh0IMFQ",
  authDomain: "muhtawak-acbaa.firebaseapp.com",
  projectId: "muhtawak-acbaa",
  storageBucket: "muhtawak-acbaa.firebasestorage.app",
  messagingSenderId: "304560417704",
  appId: "1:304560417704:web:d2e03a1f11ecb6544f8b9d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);