const assert = require("assert");

describe("destructuring arrays makes shorter code", () => {
  it("extract value from array, e.g. extract 0 into x like so `let [x] = [0];`", () => {
    let [firstValue] = [1];
    assert.strictEqual(firstValue, 1);
  });

  it("swap two variables is easy now, in one operation", () => {
    let [x, y] = ["ax", "why"];
    [x, y] = [y, x];
    assert.deepEqual([x, y], ["why", "ax"]);
  });

  it("leading commas", () => {
    const all = ["ax", "why", "zet"];
    const [, , z] = all;
    assert.equal(z, "zet");
  });

  it("extract from nested arrays", () => {
    const user = [["Some", "One"], 23];
    const [[firstName, surname], age] = user;

    const expected = "Some One = 23 years";
    assert.equal(`${firstName} ${surname} = ${age} years`, expected);
  });

  it("chained assignments", () => {
    let c, d;
    let [a, b] = ([c, d] = [1, 2]);
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
  });

  // BONUS
  it("in for-of loop", () => {
    for (var [, a, b] of [[0, 1, 2]]) {
    }
    assert.deepEqual([a, b], [1, 2]);
  });
});

describe("destructuring also works on strings", () => {
  it("destructure every character", () => {
    let [a, b, c] = "abc";
    assert.deepEqual([a, b, c], ["a", "b", "c"]);
  });

  it("missing characters are undefined", () => {
    const [a, b, c] = "ab";
    assert.equal(c, void 0);
  });

  it("unicode character work too", () => {
    const [space, , coffee] = "a ☕";
    assert.equal(coffee, "\u{2615}");
  });
});

describe("destructuring objects", () => {
  it("is simple", () => {
    const { x } = { x: 1 };
    assert.equal(x, 1);
  });

  describe("nested", () => {
    it("multiple objects", () => {
      const magic = { first: 23, second: 42 };
      const {
        magic: { second }
      } = { magic };
      assert.equal(second, 42);
    });

    it("object and array", () => {
      const {
        z: [, x]
      } = { z: [23, 42] };
      assert.equal(x, 42);
    });

    it("array and object", () => {
      const [, [{ lang }]] = [null, [{ env: "browser", lang: "ES6" }]];
      assert.equal(lang, "ES6");
    });
  });

  describe("interesting", () => {
    it("missing refs become undefined", () => {
      const { z } = { x: 1, y: 2 };
      assert.equal(z, void 0);
    });
  });
});

describe("destructuring can also have default values", () => {
  it("for an empty array", () => {
    const [a = 1] = [];
    assert.equal(a, 1);
  });

  it("for a missing value", () => {
    const [, b = 2] = [1, , 3];
    assert.equal(b, 2);
  });

  it("in an object", () => {
    const { a, b = 2 } = { a: 1 };
    assert.equal(b, 2);
  });

  it("default value is assigned, if the value is undefined", () => {
    const { a, b = 2 } = { a: 1, b: void 0 };
    assert.strictEqual(b, 2);
  });

  it("also a string works with defaults", () => {
    const [a, b = 2] = "1";
    assert.equal(a, "1");
    assert.equal(b, 2);
  });
});
