// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = function(str) {
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

module.exports = countLetters;