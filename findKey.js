// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(obj, callback) {
  // Finding the keys of the values of obj
  const objKeys = Object.keys(obj);
  // console.log(objKeys);

  for (let item of objKeys) {
    if (callback(obj[item])) {
      console.log(item);
      return item;
    }
  }
};

module.exports = findKey;