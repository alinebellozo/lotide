const assert = require("chai").assert;
const tail = require("../head");

// TEST CODE

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual(words.length, 3);
  });

  const numbers = [2, 4, 6, 8, 10];
  it("returns 5 for numbers.length", () => {
    assert.strictEqual(numbers.length, 5);
  });

});

