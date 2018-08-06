const assert = require("assert");
const products = require("./products.json");

describe("map is a transformation function", () => {
  it("it's a prototype method of Array", () => {
    let arr = [];

    assert.equal(typeof arr.map, "function");
  });

  it("it returns an array", () => {
    let transformed = [2, 3, 4].map(current => current + 1);

    assert.equal(Array.isArray(transformed), true);
  });

  it("should double the product price due to infilation", () => {
    const expected = 1998;

    let transformed = products.map(current => {
      current.price = current.price * 2;
      return current;
    });

    assert.equal(transformed[0].price, expected);
  });
});

describe("filter is a transformation function", () => {
  it("it's a prototype method of Array", () => {
    let arr = [];

    assert.equal(typeof arr.filter, "function");
  });

  it("it returns an array, which is filtered based on the condition", () => {
    let transformed = [2, 3, 4].filter(current => current % 2);

    assert.equal(Array.isArray(transformed), true);
  });

  it("should return products which has less than 30 in stock", () => {
    let filtered = products.filter(current => current.inStock < 30);

    assert.equal(filtered.length, 2);
  });

  it("should filter the products based on [S] size", () => {
    let filtered = products.filter(current => current.sizes.indexOf("S") >= 0);

    assert.equal(filtered.length, 7);
  });
});

describe("reduce is a transformation function", () => {
  it("it's a prototype method of Array", () => {
    let arr = [];

    assert.equal(typeof arr.reduce, "function");
  });

  it("it returns a reduced value {String, Number}", () => {
    let reduced = [2, 3, 4].reduce((acc, current) => acc + current, 0);

    assert.equal(typeof reduced, "number");
  });

  it("should print the price of all products available", () => {
    let sum = products.reduce((acc, current) => acc + current.price, 0);

    //sum - 34550.3
    assert.equal(sum, 34550.3);
  });
});
