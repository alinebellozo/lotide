// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
// The callback should only be provided one value: The item in the array.
// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let results = [];

  for (let value of array) {
    if (!callback(value)) {
      results.push(value);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;