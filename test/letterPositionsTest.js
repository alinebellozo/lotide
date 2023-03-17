const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

// TEST CODE

assertArraysEqual(letterPositions("hello"), [0]); // => fail
console.log(letterPositions("If nothing goes right, go left"));
