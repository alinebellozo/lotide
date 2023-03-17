const assertObjectsEqual = require("../assertObjectsEqual");

// TEST CODE

const example1 = { Jane: 30, Mary: 47, Kate: 23, Carl: 89 };
const example2 = { Kate: 23, Merlin: 18, Cristine: 38, Jane: 30 };
const example3 = { Jason: 5, Jackson: 8, Oliver: 11 };
const example4 = { Oliver: 11, Jason: 5, Jackson: 8 };
const example5 = { Merlin: 18, Jane: 30, Kate: 23, Cristine: 38 };

assertObjectsEqual(example1, example2);
assertObjectsEqual(example1, example4);
assertObjectsEqual(example3, example4);
assertObjectsEqual(example2, example5);
assertObjectsEqual(example3, example5);