// FUNCTION IMPLEMENTATION
// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`Oops, ${actual} is different from ${expected}`);
//   } else {
//     console.log(`Yay, ${actual} is equal to ${expected}`);
//   }
// };

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = function (str) {
  const countedLetters = {};

  for (const letter of str) {
    if (letter !== " ") {
      if (countedLetters[letter]) {
        countedLetters[letter] += 1;
      } else {
        countedLetters[letter] = 1;
      }
    }
  }
  return countedLetters;
};

console.log(countLetters("If nothing goes right, go left"));
