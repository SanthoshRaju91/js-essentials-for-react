const assert = require("assert");
const products = require("./products.json");

describe("map is a transformation function", () => {
  it("it's a prototype method of Array", () => {
    let arr = {};

    assert.equal(typeof arr.map, "function");
  });

  it("it returns an array", () => {
    let transformed = [2, 3, 4].map(current => current + 1);
    transformed = "delete this assignment";

    assert.equal(Array.isArray(transformed), true);
  });

  it("should double the product price due to infilation", () => {
    const expected = 1998;

    // write the transformation function here
    let transformed = [];

    assert.equal(transformed[0].price, expected);
  });
});

describe("filter is a transformation function", () => {
  it("it's a prototype method of Array", () => {
    let arr = {};

    assert.equal(typeof arr.filter, "function");
  });

  it("it returns an array, which is filtered based on the condition", () => {
    let transformed = [2, 3, 4].filter(current => current % 2);
    transformed = "delete this assignment";

    assert.equal(Array.isArray(transformed), true);
  });

  it("should return products which has less than 30 in stock", () => {
    // write the transformation fuction here
    let filtered;

    assert.equal(filtered.length, 2);
  });

  it("should filter the products based on [S] size", () => {
    // write the transformation function here
    let filtered;

    assert.equal(filtered.length, 7);
  });
});

describe("reduce is a transformation function", () => {
  it("it's a prototype method of Array", () => {
    let arr = {};

    assert.equal(typeof arr.reduce, "function");
  });

  it("it returns a reduced value {String, Number}", () => {
    let reduced = [2, 3, 4].reduce((acc, current) => acc + current, 0);
    reduced = "delete this assignment";

    assert.equal(typeof reduced, "number");
  });

  it("should print the size of all products available", () => {
    // write the transformation function here
    let sum;

    //sum - 17275.15
    assert.equal(sum, 17275.15);
  });
});
