// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
// The callback should only be provided one value: The item in the array.
// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function (array, callback) {
  let results = [];

  for (let value of array) {
    if (!callback(value)) {
      results.push(value);
    } else {
      break;
    }
  }
  return results;
};

// Expected Input

const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArraysEqual(
  takeUntil(data1, (x) => x < 0),
  [1, 2, 5, 7, 2]
); // => pass

assertArraysEqual(
  takeUntil(data2, (x) => x === "Hollywood"),
  ["I've", "been", "to", "Hollywood"]
); // => fail

assertArraysEqual(
  takeUntil(data2, (x) => x === "Hollywood"),
  ["I've", "been", "to"]
); // => pass
