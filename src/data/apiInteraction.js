import {
  offeredItems,
  neededItems,
  myOffers,
  myNeeds,
  allTheArrays,
} from "./data.js";
import firebase from "../data/firebase.js";

const searchInOffers = (keyword, prop) => {
  return offeredItems.filter((item) => {
    return item[prop].toLowerCase().includes(keyword.toLowerCase());
  });
};
const searchInNeeded = (keyword, prop) => {
  return neededItems.filter((item) => {
    return item[prop].toLowerCase().includes(keyword.toLowerCase());
  });
};

const logInUsingGoogle = () => {
  return firebase.doSignInWithGoogle().catch((error) => console.log(error));
};
const logOutUsingGoogle = () => {
  return firebase.logOut();
};
const changeAuthState = (toDo) => {
  return firebase.auth.onAuthStateChanged((user) => {
    user ? toDo(user) : toDo(undefined);
  });
};

const sortBySpecialProp = () => {
  return neededItems.sort((a, b) => {
    return b.hasOwnProperty("special") - a.hasOwnProperty("special");
  });
};

const findItemGloballyById = (itemID) => {
  return allTheArrays.find((item) => {
    return item.id === itemID;
  });
};

const firstnOfferedItems = (n) => {
  return offeredItems.slice(0, n);
};
const firstnNeededItems = (n) => {
  return neededItems.slice(0, n);
};
const firstnSortedNeededItems = (n) => {
  return sortBySpecialProp().slice(0, n);
};
const firstnMyOffers = (n) => {
  return myOffers.slice(0, n);
};
const firstnMyNeeds = (n) => {
  return myNeeds.slice(0, n);
};

export {
  firstnOfferedItems,
  firstnNeededItems,
  firstnSortedNeededItems,
  firstnMyOffers,
  firstnMyNeeds,
  findItemGloballyById,
  sortBySpecialProp,
  logInUsingGoogle,
  logOutUsingGoogle,
  changeAuthState,
  searchInOffers,
  searchInNeeded,
};
