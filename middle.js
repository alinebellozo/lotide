/*
- Implement middle which will take in an array and return the middle-most element(s) of the given array.
- The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
- For arrays with one or two elements, there is no middle. Return an empty array.
- For arrays with odd number of elements, an array containing a single middle element should be returned.
- For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
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
    console.log(`Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function (arr) {
  let newArr = [];
  middleItem = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[middleItem - 1]);
    newArr.push(arr[middleItem]);
    // console.log(
    //   `even number of elements, the middle are: ${arr[middleItem - 1]} and ${
    //     arr[middleItem]
    //   }`
    // );
  } else {
    newArr.push(arr[middleItem]);
    // console.log(`odd number of elements, the middle is: ${arr[middleItem]}`);
  }

  // console.log(newArr);
  return newArr;
};

// one or two elements:
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

// // odd # of elements:
console.log(middle([38, 62, 100])); // => [62]
console.log(middle([16, 28, 40, 74, 85])); // => [40]

// // even # of elements:
console.log(middle([10, 27, 34, 49])); // => [27, 34]
console.log(middle([31, 82, 193, 224, 305, 486])); // => [193, 224]

assertArraysEqual(middle([11, 22, 33, 44, 55]), [33]); // => pass
assertArraysEqual(middle([66, 77, 88, 99]), [33]); // => fail
assertArraysEqual(middle(["head", "shoulder", "knees", "toes"]), ["knees"]); // => fail
