/*
- Implement middle which will take in an array and return the middle-most element(s) of the given array.
- The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
- For arrays with one or two elements, there is no middle. Return an empty array.
- For arrays with odd number of elements, an array containing a single middle element should be returned.
- For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
*/
const middle = function(arr) {
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

module.exports = middle;