const assert = require("assert");

describe("arrow functions", function() {
  it("Shorter to write, eliminate all the fats", function() {
    const func = () => {
      return "I'm a return value of func()";
    };
    assert.equal(func(), "I'm a return value of func()");
  });

  it("a single expression, without curly braces returns too is called implicit returns", function() {
    // remove the curly braces around the function body
    const func = () => {
      "I return too";
    };
    assert.equal(func(), "I return too");
  });

  it("function with one parameter can be written without parens", () => {
    const func = p => param - 1;
    assert.equal(func(25), 24);
  });

  it("function many params require parens", () => {
    const func = first => first + second;
    assert.equal(func(23, 42), 23 + 42);
  });

  it("function body needs a parens to return an object", () => {
    // wrap the entire function body along with curly braces with parens
    const func = () => {
      iAm: "an object";
    };
    assert.deepEqual(func(), { iAm: "an object" });
  });
});
