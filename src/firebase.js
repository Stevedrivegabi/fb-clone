import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBuz5EXYa0hYYVkxdCQW8HndPFlc3xOeu8",
    authDomain: "facebook-clone-4099c.firebaseapp.com",
    projectId: "facebook-clone-4099c",
    storageBucket: "facebook-clone-4099c.appspot.com",
    messagingSenderId: "1086478186735",
    appId: "1:1086478186735:web:2cc38f26601bf7715f031a",
    measurementId: "G-2QSZ830NL0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;