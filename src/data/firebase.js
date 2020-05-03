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
      .then((snapshot) =>
        snapshot.docs.map((object) => {
          return { id: object.id, ...object.data() };
        })
      );
  getNeeds = () =>
    this.db
      .collection("needs")
      .get()
      .then((snapshot) =>
        snapshot.docs.map((object) => {
          return { id: object.id, ...object.data() };
        })
      );
  addNeed = (newNeed) =>
    this.db
      .collection("needs")
      .add({ ...newNeed })
      .then(function (docRef) {
        alert("Búsqueda subida exitosamente", docRef.id);
      })
      .catch(function (error) {
        console.error("Error al agregar búsqueda", error);
      });
  addOffer = (newOffer) =>
    this.db
      .collection("offers")
      .add({ ...newOffer })
      .then(function (docRef) {
        alert("Oferta subida exitosamente", docRef.id);
      })
      .catch(function (error) {
        console.error("Error al agregar oferta", error);
      });
}

export default new Firebase(firebaseConfig);
