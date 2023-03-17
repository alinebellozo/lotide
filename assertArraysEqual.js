// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
// Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.
const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;