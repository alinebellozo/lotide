// Call map and pass in our words and a simple arrow function.

const map = function(array, callback) {
  // Start off with an empty array and return that array
  const results = [];

  // Add the loop logic which just console.logs each item in the provided array as well as what happens to the item after being passed into the callback.
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;