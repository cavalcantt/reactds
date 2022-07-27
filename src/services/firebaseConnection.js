import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

 const firebaseConfig = {
  apiKey: "AIzaSyC9qP-kxO2QNuR6HDVrRZOA1L0SwU2fD_U",
  authDomain: "projetosistema-dc82c.firebaseapp.com",
  projectId: "projetosistema-dc82c",
  storageBucket: "projetosistema-dc82c.appspot.com",
  messagingSenderId: "172882867149",
  appId: "1:172882867149:web:79fef50f62e0bdb5648a84",
  measurementId: "G-5WJENN77G8"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;