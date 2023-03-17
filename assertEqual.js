// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;