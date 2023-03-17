/*
- Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- Our function however, will for now be much simpler and only handle one level of nesting: flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
*/

const flatten = function(arr) {
  let newArr = [];

  // loops thru all the items of the array
  for (let item of arr) {
    // checks if the array is an array
    if (Array.isArray(item)) {
      // if it is, go thru all the items
      for (let secondItem of item) {
        newArr.push(secondItem);
      }
      // if it is not (i.e. if it is another array),
    } else {
      // pushes the item to the new array
      newArr.push(item);
    }
  }
  // console.log(newArr);
  return newArr;
};

module.exports = flatten;