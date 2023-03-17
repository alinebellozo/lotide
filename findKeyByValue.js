// It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(obj, value) {
  // Finding the keys of the values of obj
  const objKeys = Object.keys(obj);

  // Looping thru objKeys to find the item
  for (const item of objKeys) {
    // if the item matches the value of that key in the existing obj, it will return the item
    if (obj[item] === value) {
      return item;
    }
  }
};

module.exports = findKeyByValue;