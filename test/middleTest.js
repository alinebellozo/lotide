const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE

// one or two elements:
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

// // odd # of elements:
console.log(middle([38, 62, 100])); // => [62]
console.log(middle([16, 28, 40, 74, 85])); // => [40]

// // even # of elements:
console.log(middle([10, 27, 34, 49])); // => [27, 34]
console.log(middle([31, 82, 193, 224, 305, 486])); // => [193, 224]

assertArraysEqual(middle([11, 22, 33, 44, 55]), [33]); // => pass
assertArraysEqual(middle([66, 77, 88, 99]), [33]); // => fail
assertArraysEqual(middle(["head", "shoulder", "knees", "toes"]), ["knees"]); // => fail