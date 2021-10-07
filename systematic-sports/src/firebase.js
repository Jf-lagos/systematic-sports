import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
const firebaseConfig = {
   apiKey: "AIzaSyA30MqO1R6JR18enIvwfMl8HuVjAF_mEMc",
   authDomain: "systemic-sports.firebaseapp.com",
   projectId: "systemic-sports",
   storageBucket: "systemic-sports.appspot.com",
   messagingSenderId: "214474989655",
   appId: "1:214474989655:web:c9269c2fc5f01e150d0312",
   measurementId: "G-Q9SYKDGLMQ"
 };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;