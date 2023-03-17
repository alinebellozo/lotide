// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// In order to fix the error, we can have our function define a new empty object called results and return it
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // Increment the count of each item into results as we encounter each string item in the array.
  for (const item of allItems) {
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.

    // Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

module.exports = countOnly;