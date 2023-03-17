const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [2, 3, 4]), false); // => pass
assertEqual(eqArrays(["1", "2", "3"], [2, 3, 4]), false); // => pass
assertEqual(eqArrays(["1", 2, "3"], [2, 3, 4]), false); // => pass
assertEqual(eqArrays([4, 5, 6], [4, 5, 6]), true); // => pass
assertEqual(eqArrays([7, 8], [7, 8, 9]), false); // => pass
