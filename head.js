// FUNCTION IMPLEMENTATION
const head = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) {
      console.log(arr);
    } else if (arr.length === 0) {
      console.log(undefined);
    }
  }
  return arr[0];
};

module.exports = head;