import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

class Firebase {
  constructor(config) {
    const app = firebase.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }
  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
  logOut = () => this.auth.signOut();
  getOffers = () =>
    this.db
      .collection("offers")
      .get()
      .then((snapshot) => snapshot.docs.map((object) => object.data()));
  getNeeds = () =>
    this.db
      .collection("needs")
      .get()
      .then((snapshot) => snapshot.docs.map((object) => object.data()));
}

export default new Firebase(firebaseConfig);
