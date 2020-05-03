import React from "react";
import { zones } from "./data.js";
import firebase from "../data/firebase.js";

const addNewNeed = (newNeed) => {
  return firebase.addNeed(newNeed);
};
const addNewOffer = (newOffer) => {
  return firebase.addOffer(newOffer);
};
const changeAuthState = (toDo) => {
  return firebase.auth.onAuthStateChanged((user) => {
    user ? toDo(user) : toDo(undefined);
  });
};
const getAllNeeds = async () => {
  return await firebase.getNeeds();
};
const getAllOffers = async () => {
  return await firebase.getOffers();
};
const logInUsingGoogle = () => {
  return firebase.doSignInWithGoogle().catch((error) => console.log(error));
};
const logOutUsingGoogle = () => {
  return firebase.logOut();
};
const mapZonesIntoOptions = () => {
  return zones.map((zone) => {
    return <option value={zone}>{zone}</option>;
  });
};
export {
  addNewNeed,
  addNewOffer,
  changeAuthState,
  getAllNeeds,
  getAllOffers,
  logInUsingGoogle,
  logOutUsingGoogle,
  mapZonesIntoOptions,
};
