const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    return console.log(
      `Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual;