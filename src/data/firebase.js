import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

class Firebase {
  constructor(config) {
    const app = firebase.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }
  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
  logOut = () => this.auth.signOut();
}

export default new Firebase(firebaseConfig);
