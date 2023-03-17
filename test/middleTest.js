const assert = require("chai").assert;
const middle = require("../middle");

// TEST CODE

describe("#middle", () => {
  it("returns [33] for [11, 22, 33, 44, 55]", () => {
    assert.deepEqual(middle([11, 22, 33, 44, 55]), [33]);
  });

  it("returns [shoulder, knees] for [head, shoulder, knees, toes]", () => {
    assert.deepEqual(middle(["head", "shoulder", "knees", "toes"]), ["shoulder", "knees"]);
  });
});