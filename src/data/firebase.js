import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

const getAndMapACollection = (collection) => {
  return collection.get().then((snapshot) =>
    snapshot.docs.map((object) => {
      return { id: object.id, ...object.data() };
    })
  );
};
const addItem = (collection, item) => {
  return collection
    .add({ ...item })
    .then(function (docRef) {
      alert("Agregado exitosamente", docRef.id);
    })
    .catch(function (error) {
      console.error("No se pudo agregar correctamente", error);
    });
};
const addImage = (storage, file) => {
  return storage
    .put(file)
    .then(function (snapshot) {
      return snapshot.ref.getDownloadURL().then((object) => {
        return object;
      });
    })
    .catch((error) => console.log(error));
};

class Firebase {
  constructor(config) {
    const app = firebase.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.storageRef = app.storage().ref();
    this.needsRef = this.db.collection("needs");
    this.offersRef = this.db.collection("offers");
  }
  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
  logOut = () => this.auth.signOut();

  addNeed = (newNeed) => addItem(this.needsRef, newNeed);
  addOffer = (newOffer) => addItem(this.offersRef, newOffer);

  getFirstFiveNeeds = () =>
    getAndMapACollection(this.needsRef.where("urgent", "==", true).limit(5));
  getFirstFiveOffers = () => getAndMapACollection(this.offersRef.limit(5));

  getNeeds = () => getAndMapACollection(this.needsRef);
  getOffers = () => getAndMapACollection(this.offersRef);

  getMyNeeds = (userEmail) =>
    getAndMapACollection(this.needsRef.where("userEmail", "==", userEmail));
  getMyOffers = (userEmail) =>
    getAndMapACollection(this.offersRef.where("userEmail", "==", userEmail));

  searchTitleInNeeds = (keyword) =>
    getAndMapACollection(
      this.needsRef.where("title".toLowerCase(), "==", keyword.toLowerCase())
    );
  searchTitleInOffers = (keyword) =>
    getAndMapACollection(
      this.offersRef.where("title".toLowerCase(), "==", keyword.toLowerCase())
    );

  uploadImageForNeeds = (file) => {
    var needsImagesRef = this.storageRef.child(`images/needs/${file.name}`);
    return addImage(needsImagesRef, file);
  };
  uploadImageForOffers = (file) => {
    var offersImagesRef = this.storageRef.child(`images/offers/${file.name}`);
    return addImage(offersImagesRef, file);
  };
}

export default new Firebase(firebaseConfig);
