const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);

  // Check if:
  // They have the same number of keys
  // The value for each key in one object is the same as the value for that same key in the other object
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop through the keys returned by Object.keys for one of the objects
  // If both values are indeed arrays: pass them to eqArrays and ensure that it returns true.
  // Otherwise (else): assume that they are primitives and continue to use === to compare the two values.
  else
    for (const key of arr1) {
      // compare both objects' values for that key.
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  return true;
};

module.exports = eqObjects;
