// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Oops, ${actual} is different from ${expected}`);
  } else {
    console.log(`Yay, ${actual} is equal to ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [2, 3, 4]), false); // => pass
assertEqual(eqArrays(["1", "2", "3"], [2, 3, 4]), false); // => pass
assertEqual(eqArrays(["1", 2, "3"], [2, 3, 4]), false); // => pass
assertEqual(eqArrays([4, 5, 6], [4, 5, 6]), true); // => pass
assertEqual(eqArrays([7, 8], [7, 8, 9]), false); // => pass

// It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day.
