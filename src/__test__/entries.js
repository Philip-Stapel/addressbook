
const addEntry = (array, entry) => {
  if (entry.name === "") {

    return array
  }
  array.push(entry);
  return array;
};
const deleteEntry = (array, id) => {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  const index = array.findIndex(el => el.id === id);
  if (index === -1) {
    throw new Error('no matching id');
  }
  array.splice(index, 1);
  return array;
};

const updateEntry = (array, id, updatedEntry) => {
  const validDeletion = array.some(el => el.id === id);
  if (validDeletion === false) {
    throw new Error('no matching id');
  }
  return array.map(entry => {
    if (entry.id === id) {
      return updatedEntry;
    } else {
      return entry;
    }
  });
};

const getEntries = (array) => {
  if (array.length === 0) {
    return array
  }
  array.forEach(function (entry) {
    console.log(entry);
  });
};

module.exports = {
  addEntry,
  deleteEntry,
  getEntries,
  updateEntry
};
