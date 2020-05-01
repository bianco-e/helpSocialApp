import React from "react";
import { offeredItems, neededItems, allTheArrays, zones } from "./data.js";
import firebase from "../data/firebase.js";

const changeAuthState = (toDo) => {
  return firebase.auth.onAuthStateChanged((user) => {
    user ? toDo(user) : toDo(undefined);
  });
};
const findItemGloballyByTitle = (itemTitle) => {
  return allTheArrays.find((item) => {
    return item.title === itemTitle;
  });
};
const getAllNeeds = () => {
  return firebase.getNeeds();
};
const getAllOffers = () => {
  return firebase.getOffers();
};
const logInUsingGoogle = () => {
  return firebase.doSignInWithGoogle().catch((error) => console.log(error));
};
const logOutUsingGoogle = () => {
  return firebase.logOut();
};
const mapZonesIntoOptions = () => {
  return zones.map((zone) => {
    return <option>{zone}</option>;
  });
};
const searchInNeeded = (keyword, prop) => {
  return neededItems.filter((item) => {
    return item[prop].toLowerCase().includes(keyword.toLowerCase());
  });
};
const searchInOffers = (keyword, prop) => {
  return offeredItems.filter((item) => {
    return item[prop].toLowerCase().includes(keyword.toLowerCase());
  });
};
export {
  changeAuthState,
  findItemGloballyByTitle,
  getAllNeeds,
  getAllOffers,
  logInUsingGoogle,
  logOutUsingGoogle,
  mapZonesIntoOptions,
  searchInNeeded,
  searchInOffers,
};
