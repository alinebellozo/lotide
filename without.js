/* 
- Implement without which will return a subset of a given array, removing unwanted elements.
- This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
- Among your test cases, be sure to include an important test that is easy to overlook: The without function should be returning a new array and not modify the original array that is passed in.
*/

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} matches ${arr2}`);
  } else {
    console.log(`${arr1} does not match ${arr2}`);
  }
};

const without = function (sourceArr, itemsToRemoveArr) {
  const newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
      newArr.push(sourceArr[i]);
    }
  }
  return newArr;
};

console.log(newArr);
const numbersArr = [10, 20, 30, 40, 50];
const wordsArr = ["orange", "blueberry", "carrot", "apple"];

without(["cats", "dogs", "horses", "sheep"], ["sheep"]); // => ["cats", "dogs", "horses"]
without(["a", "b", "c", "d", "e", "f"], ["b", "d", "f"]); // => ["a", "c", "e"]
without([9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 8, 5, 4, 1]); // => [7, 6, 3, 2]
without(numbersArr, [10, 30, 50]); // => [20, 40]
assertArraysEqual(wordsArr, ["orange", "blueberry", "carrot", "apple"]);
