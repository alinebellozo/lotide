const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const takeUntil = require("../takeUntil");

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArraysEqual(
  takeUntil(data1, (x) => x < 0),
  [1, 2, 5, 7, 2]
); // => pass

assertArraysEqual(
  takeUntil(data2, (x) => x === "Hollywood"),
  ["I've", "been", "to", "Hollywood"]
); // => fail

assertArraysEqual(
  takeUntil(data2, (x) => x === "Hollywood"),
  ["I've", "been", "to"]
); // => pass
