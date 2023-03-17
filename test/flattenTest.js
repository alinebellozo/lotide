const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const flatten = require("../flatten");

// TEST CODE

console.log(flatten([1, 2, [3], 4]));
console.log(flatten(["a", "b", ["c", "d", "e"], "f", ["g"]])); // => ["a", "b", "c", "d", "e", "f", "g"]
console.log(flatten([
  "rice",
  "beans",
  ["pasta"],
  "salad",
  ["tomato", "onions", "garlic"],
]));