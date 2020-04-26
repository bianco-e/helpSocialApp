import {
  offeredItems,
  neededItems,
  myOffers,
  myNeeds,
  allTheArrays,
} from "./data.js";

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
};
