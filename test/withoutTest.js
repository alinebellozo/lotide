const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const without = require("../without");

// TEST CODE

const numbersArr = [10, 20, 30, 40, 50];
const wordsArr = ["orange", "blueberry", "carrot", "apple"];

without(["cats", "dogs", "horses", "sheep"], ["sheep"]); // => ["cats", "dogs", "horses"]
without(["a", "b", "c", "d", "e", "f"], ["b", "d", "f"]); // => ["a", "c", "e"]
without([9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 8, 5, 4, 1]); // => [7, 6, 3, 2]
without(numbersArr, [10, 30, 50]); // => [20, 40]
assertArraysEqual(wordsArr, ["orange", "blueberry", "carrot", "apple"]);
