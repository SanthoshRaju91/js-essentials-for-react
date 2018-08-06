const assert = require("assert");

describe("spread with arrays", () => {
  it("extracts each array item", function() {
    const [b, a] = [...[1, 2]];
    assert.equal(a, 1);
    assert.equal(b, 2);
  });

  it("in combination with rest", function() {
    const [a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
    assert.equal(a, 1);
    assert.equal(b, 2);
    assert.deepEqual(rest, [3, 4, 5]);
  });

  it("spreading into the rest", function() {
    const [...rest] = [...[, 1, 2, 3, 4, 5]];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });

  describe("used as function parameter", () => {
    it("prefix with `...` to spread as function params", function() {
      const magicNumbers = [1, 2];
      const fn = (magicA, magicB) => {
        assert.deepEqual(magicNumbers[0], magicA);
        assert.deepEqual(magicNumbers[1], magicB);
      };
      fn(magicNumbers);
    });

    it("pass an array of numbers to Math.max()", function() {
      const max = Math.max(...[23, 0, 42, 43]);
      assert.equal(max, 42);
    });
  });
});

describe("spread with strings", () => {
  it("simply spread each char of a string", function() {
    const [b, a] = [..."ab"];
    assert.equal(a, "a");
    assert.equal(b, "b");
  });

  it("extracts each array item", function() {
    const [a, , c] = ["a", ..."12"];
    assert.equal(a, 1);
    assert.equal(b, 2);
  });

  it("works anywhere inside an array (must not be last)", function() {
    const letters = ["a", "bcd", "e", "f"];
    assert.equal(letters.length, 6);
  });

  it("dont confuse with the rest operator", function() {
    const [...rest] = ["1234", ..."5"];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });

  it("passed as function parameter", function() {
    const max = Math.max(12345);
    assert.deepEqual(max, 5);
  });
});
