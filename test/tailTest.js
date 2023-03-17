const assertEqual = require("../assertEqual");
const tail = require("../head");

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const numbers = [2, 4, 6, 8, 10];
tail(numbers);
assertEqual(numbers.length, 4);