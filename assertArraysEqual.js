// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
// Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

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
    console.log(`${arr1} matches ${arr2}`);
  } else {
    console.log(`${arr1} does not match ${arr2}`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertArraysEqual(eqArrays([1, 2, 3], [2, 3, 4]), false); // => pass
assertArraysEqual(eqArrays(["1", "2", "3"], [2, 3, 4]), false); // => pass
assertArraysEqual(eqArrays(["1", 2, "3"], [2, 3, 4]), false); // => pass
assertArraysEqual(eqArrays([4, 5, 6], [4, 5, 6]), true); // => pass
assertArraysEqual(eqArrays([7, 8], [7, 8, 9]), false); // => pass
