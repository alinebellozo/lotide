/* 
- Implement without which will return a subset of a given array, removing unwanted elements.
- This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
- Among your test cases, be sure to include an important test that is easy to overlook: The without function should be returning a new array and not modify the original array that is passed in.
*/

const without = function(sourceArr, itemsToRemoveArr) {
  const newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
      newArr.push(sourceArr[i]);
    }
  }
  return newArr;
};

module.exports = without;