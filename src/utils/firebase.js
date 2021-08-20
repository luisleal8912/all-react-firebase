import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6t5L3EAO41-zBcV1cx1HDrauZ4P7Znjc",
  authDomain: "todo-70526.firebaseapp.com",
  databaseURL: "https://todo-70526-default-rtdb.firebaseio.com",
  projectId: "todo-70526",
  storageBucket: "todo-70526.appspot.com",
  messagingSenderId: "849124378460",
  appId: "1:849124378460:web:8db2cbe0cf0e3d0db06399",
};

export default firebase.initializeApp(firebaseConfig);
