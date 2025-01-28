export const filterPlus = (searchText, listOfPlus, fields) => {
  if (!searchText) {
    return listOfPlus;
  }
  return listOfPlus.filter((item) =>
    fields.some(
      (field) =>
        item[field] &&
        item[field].toLowerCase().includes(searchText.toLowerCase())
    )
  );
};
