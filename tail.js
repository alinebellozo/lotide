// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const tail = function (arr) {
  let newArr = arr.slice(1);

  return newArr;
};

// TEST CODE
console.log(tail(["Lighthouse Labs", "Bootcamp"]));
console.log(tail([1, 2, 3, 4]));
console.log(tail(["a", "b", "c", "d", "e"]));
