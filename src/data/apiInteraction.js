const sortBySpecialProp = (array) => {
  return array.sort((a, b) => {
    return b.hasOwnProperty("special") - a.hasOwnProperty("special");
  });
};

const findItemById = (array, itemID) => {
  return array.find((item) => {
    return item.id === itemID;
  });
};

const firstnItems = (array, n) => {
  return array.slice(0, n);
};

export { firstnItems, findItemById, sortBySpecialProp };
