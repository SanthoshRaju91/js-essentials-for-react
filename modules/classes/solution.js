const assert = require("assert");

describe("class creation", () => {
  it("is as simple as `class XXX {}`", function() {
    class TestClass {}

    const instance = new TestClass();
    assert.equal(typeof instance, "object");
  });

  it("class is block scoped", () => {
    {
      class Inside {}
    }
    assert.equal(typeof Inside, "undefined");
  });

  it("special method is `constructor`", function() {
    class User {
      constructor(id) {
        this.id = id;
      }
    }

    const user = new User(42);
    assert.equal(user.id, 42);
  });

  it("defining a method is simple", function() {
    class User {
      writesTests() {
        return false;
      }
    }

    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });

  it("multiple methods need no commas (opposed to object notation)", function() {
    class User {
      constructor() {
        this.everWroteATest = true;
      }
      wroteATest() {
        this.everWroteATest = false;
      }
      isLazy() {
        return this.everWroteATest;
      }
    }

    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });

  it("anonymous class", () => {
    const classType = typeof (() => {});
    assert.equal(classType, "function");
  });
});

describe("inside a class you can use the `static` keyword", () => {
  describe("for methods", () => {
    class IntegrationTest {}
    class UnitTest {}

    it("a static method just has the prefix `static`", () => {
      class TestFactory {
        static makeTest() {
          return new UnitTest();
        }
      }

      assert.ok(TestFactory.makeTest() instanceof UnitTest);
    });

    it("the method name can be dynamic/computed at runtime", () => {
      const methodName = "createTest";
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
        static get testType() {
          return "unit";
        }
      }

      assert.equal(UnitTest.testType, "unit");
    });

    it("even a static getter name can be dynamic/computed at runtime", () => {
      const type = "test" + "Type";
      class IntegrationTest {
        static get [type]() {
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
      class A {}

      assert.equal(new A() instanceof Object, true);
    });

    it("B extends A, B is also instance of Object", () => {
      class A {}
      class B extends A {}

      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });

    it("class can extend `null`, not an instance of Object", () => {
      class NullClass extends null {}

      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });
  });

  describe("instance of", () => {
    it("when B inherits from A, `new B()` is also an instance of A", () => {
      class A {}
      class B extends A {}

      assert.equal(new B() instanceof A, true);
    });

    it("extend over multiple levels", () => {
      class A {}
      class C extends A {}

      let instance = new C();
      assert.equal(instance instanceof A, true);
    });
  });
});
