import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAkjFQTONAxhRCzB1vek12DT3m5ooRNI4",
  authDomain: "ingraextranet.firebaseapp.com",
  projectId: "ingraextranet",
  storageBucket: "ingraextranet.appspot.com",
  messagingSenderId: "904410782779",
  appId: "1:904410782779:web:289ddd9be053339c42901e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
