import firebase from "../data/firebase.js";

const addAnImageToNeeds = async (file) =>
  await firebase.uploadImageForNeeds(file);
const addAnImageToOffers = async (file) =>
  await firebase.uploadImageForOffers(file);

const addNewNeed = (newNeed) => firebase.addNeed(newNeed);
const addNewOffer = (newOffer) => firebase.addOffer(newOffer);

const changeAuthState = (toDo) => {
  return firebase.auth.onAuthStateChanged((user) => {
    user ? toDo(user) : toDo(undefined);
  });
};

const getAllMyNeeds = (userEmail) => firebase.getMyNeeds(userEmail);
const getAllMyOffers = (userEmail) => firebase.getMyOffers(userEmail);

const getAllNeeds = async () => await firebase.getNeeds();
const getAllOffers = async () => await firebase.getOffers();

const getFiveNeeds = () => firebase.getFirstFiveNeeds();
const getFiveOffers = () => firebase.getFirstFiveOffers();

const getNeedByID = async (docID) => await firebase.getNeedByID(docID);
const getOfferByID = async (docID) => await firebase.getOfferByID(docID);

const logInUsingGoogle = () =>
  firebase.doSignInWithGoogle().catch((error) => alert(error));
const logOutUsingGoogle = () => firebase.logOut();

const searchByTitleInNeeds = (keyword) => firebase.searchTitleInNeeds(keyword);
const searchByTitleInOffers = (keyword) =>
  firebase.searchTitleInOffers(keyword);

export {
  addAnImageToNeeds,
  addAnImageToOffers,
  addNewNeed,
  addNewOffer,
  changeAuthState,
  getAllMyNeeds,
  getAllMyOffers,
  getAllNeeds,
  getAllOffers,
  getFiveNeeds,
  getFiveOffers,
  getNeedByID,
  getOfferByID,
  logInUsingGoogle,
  logOutUsingGoogle,
  searchByTitleInNeeds,
  searchByTitleInOffers,
};
