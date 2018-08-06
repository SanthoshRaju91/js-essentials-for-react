const assert = require("assert");

describe("class creation", () => {
  it("is as simple as `class XXX {}`", function() {
    let TestClass;

    const instance = new TestClass();
    assert.equal(typeof instance, "object");
  });

  it("class is block scoped", () => {
    class Inside {}
    {
      class Inside {}
    }
    assert.equal(typeof Inside, "undefined");
  });

  it("special method is `constructor`", function() {
    class User {
      constructor(id) {}
    }

    const user = new User(42);
    assert.equal(user.id, 42);
  });

  it("defining a method is simple", function() {
    class User {}

    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });

  it("multiple methods need no commas (opposed to object notation)", function() {
    class User {
      wroteATest() {
        this.everWroteATest = true;
      }
      isLazy() {}
    }

    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });

  it("anonymous class", () => {
    const classType = typeof {};
    assert.equal(classType, "function");
  });
});

describe("inside a class you can use the `static` keyword", () => {
  describe("for methods", () => {
    class IntegrationTest {}
    class UnitTest {}

    it("a static method just has the prefix `static`", () => {
      class TestFactory {
        makeTest() {
          return new UnitTest();
        }
      }

      assert.ok(TestFactory.makeTest() instanceof UnitTest);
    });

    it("the method name can be dynamic/computed at runtime", () => {
      const methodName = "makeTest";
      class TestFactory {
        static [methodName]() {
          return new UnitTest();
        }
      }

      assert.ok(TestFactory.createTest() instanceof UnitTest);
    });
  });

  describe("for accessors", () => {
    it("a getter name can be static, just prefix it with `static`", () => {
      class UnitTest {
        get testType() {
          return "unit";
        }
      }

      assert.equal(UnitTest.testType, "unit");
    });

    it("even a static getter name can be dynamic/computed at runtime", () => {
      const type = "test" + "Type";
      class IntegrationTest {
        get type() {
          return "integration";
        }
      }

      assert.ok("testType" in IntegrationTest);
      assert.equal(IntegrationTest.testType, "integration");
    });
  });
});

describe("classes can inherit from another", () => {
  describe("the default super class is Object", () => {
    it("class A is an instance of Object", () => {
      let A;

      assert.equal(new A() instanceof Object, true);
    });

    it("B extends A, B is also instance of Object", () => {
      class A {}
      class B {}

      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });

    it("class can extend `null`, not an instance of Object", () => {
      class NullClass extends Object {}

      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });
  });

  describe("instance of", () => {
    it("when B inherits from A, `new B()` is also an instance of A", () => {
      let A;
      class B extends A {}

      assert.equal(new B() instanceof A, true);
    });

    it("extend over multiple levels", () => {
      class A {}
      class C extends B {}

      let instance = C;
      assert.equal(instance instanceof A, true);
    });
  });
});
