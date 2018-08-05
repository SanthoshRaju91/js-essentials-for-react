const assert = require("assert");

describe("`let` restricts the scope of the variable to the current block", () => {
  describe("`let` vs. `var`", () => {
    it("`var` works as usual", () => {
      if (true) {
        var varX = true;
      }
      assert.equal(varX, true);
    });

    it("`let` restricts scope to inside the block", () => {
      if (true) {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
  });

  describe("`let` usage", () => {
    it("`let` use in `for` loops", () => {
      let obj = { x: 1 };
      for (let key in obj) {
        // something done here, not that we need to concerned about
      }
      assert.throws(() => console.log(key));
    });

    it("blocking scope in ES6", () => {
      {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
  });

  describe("`let` is not hoisted unlike var", () => {
    it("`var` should print the value", () => {
      assert.equal(varX, undefined);

      var varX = true;
    });

    xit("`let` throws a reference error", () => {
      assert.throws(() => console.log(letX));

      let letX = 2;
    });
  });
});
