import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCVzo0LkFmyAJg3P9_T598J7GherCN4dYY",
  authDomain: "socialapp-bba50.firebaseapp.com",
  databaseURL: "https://socialapp-bba50.firebaseio.com",
  projectId: "socialapp-bba50",
  storageBucket: "socialapp-bba50.appspot.com",
  messagingSenderId: "449506805255",
  appId: "1:449506805255:web:94634766e63313cecf0ca2",
  measurementId: "G-WW8BMN4NLV",
};

class Firebase {
  constructor(config) {
    const app = firebase.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }
  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
}

export default new Firebase(firebaseConfig);
