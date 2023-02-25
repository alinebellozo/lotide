// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(actual + " is different from " + expected);
  } else {
    console.log("Yay, " + actual + " is equal to " + expected);
  }
};

// TEST CODE
console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
console.assert(assertEqual(1, 1));
