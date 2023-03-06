const eqObjects = function (object1, object2) {
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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    return console.log(
      `Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

// an example use of inspect function: console.log(`Example label: ${inspect(actual)}`);

const example1 = { Jane: 30, Mary: 47, Kate: 23, Carl: 89 };
const example2 = { Kate: 23, Merlin: 18, Cristine: 38, Jane: 30 };
const example3 = { Jason: 5, Jackson: 8, Oliver: 11 };
const example4 = { Oliver: 11, Jason: 5, Jackson: 8 };
const example5 = { Merlin: 18, Jane: 30, Kate: 23, Cristine: 38 };

assertObjectsEqual(example1, example2);
assertObjectsEqual(example1, example4);
assertObjectsEqual(example3, example4);
assertObjectsEqual(example2, example5);
assertObjectsEqual(example3, example5);
