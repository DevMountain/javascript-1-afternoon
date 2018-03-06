//Helper Function
function arrayIncludes(arr, values) {
  let allGood = true;
  for (let i = 0; i < values.length; i++) {
    if (!arr.includes(values[i])) {
      allGood = false
      break
    }
  }
  return allGood
}

//Test Suite
describe('js-day1-basic-assessment', function() {


  describe('Problem 1 - greeting', function() {
    it('should exist', function() {
      expect(greeting).toBeDefined();
    })
    it('should be made with a functon delceration', function(){
      let str = greeting.toString();
      let match = !!str.match(/function greeting\(/);
      expect(match).toBe(true);
    })
    it('should return "Hello, Trogdor" if passed "Trogdor"', function() {
      expect(greeting('Trogdor')).toBe('Hello, Trogdor');
    })
    it('should return "Hello, undefined" if passed nothing', function() {
      expect(greeting()).toBe("Hello, undefined");
    })
  })

  describe('Problem 2 - newGreeting', function() {
    it('should exist', function() {
      expect(newGreeting).toBeDefined();
    })
    it('should be made with an anonymous functon assignment', function(){
      let str = newGreeting.toString();
      let match = !!str.match(/function \(/);
      expect(match).toBe(true);
    })
    it('should return "Hello, Trogdor" if passed "Trogdor"', function() {
      expect(newGreeting('Trogdor')).toBe('Hello, Trogdor');
    })
    it('should return "Hello, undefined" if passed nothing', function() {
      expect(newGreeting()).toBe("Hello, undefined");
    })
  })

  describe('Problem 3 - finalGreeting', function() {
    it('should exist', function() {
      expect(finalGreeting).toBeDefined();
    })
    it('should be made with an arrow function assignment', function(){
      let str = finalGreeting.toString();
      let match = !!str.match(/pr=>/);
      expect(match).toBe(true);
    })
    it('should return "Hello, Trogdor" if passed "Trogdor"', function() {
      expect(finalGreeting('Trogdor')).toBe('Hello, Trogdor');
    })
    it('should return "Hello, undefined" if passed nothing', function() {
      expect(finalGreeting()).toBe("Hello, undefined");
    })
  })

  describe('Problem 4 - ', function() {
    it('groceries should exist', function() {
      expect(groceries).toBeDefined();
    })
    it('groceries should contain given values', function() {
      let vals = ["apples", "milk", "eggs", "bread"]
      let allGood = arrayIncludes(groceries, vals)
      expect(allGood).toBe(true);
    })

    it('doubleCheck should return type Array', function() {
      let vals = ["apples", "milk", "eggs", "bread"]
      expect(Array.isArray(doubleCheck(vals))).toBe(true);
    })
    it('doubleCheck should return array that contains chocolate', function() {
      let vals = ["apples", "milk", "eggs", "bread"]
      let newArr = doubleCheck(vals)
      expect(newArr.includes("chocolate")).toBe(true);
    })
    it('doubleCheck should not remove anything from the array', function() {
      let vals = ["apples", "milk", "eggs", "bread"]
      let newArr = doubleCheck(vals)
      expect(arrayIncludes(newArr, vals)).toBe(true);
    })

  })

  describe('Problem 5 - ', function() {
    it('dog should exist with the right properties', function() {
      expect(dog).toBeDefined()
      expect(typeof dog.name).toEqual('string')
      expect(typeof dog.color).toEqual('string')
      expect(typeof dog.age).toEqual('number')
      expect(typeof dog.goodBoy).toEqual('boolean')
    })
    it("should properly assign the dog name", function() {
      expect(devMountainClassPet).toBe(dog.name);
    });
    it("dog should have a bark method", function() {
      expect(typeof dog.bark).toBe('function');
    });
    it("dog.bark should return 'Woof woof'", function() {
      expect(dog.bark()).toBe('Woof woof');
    });

    it("ruff should exist", function() {
      expect(ruff).toBeDefined();
    });
    it("ruff should be 'Woof woof'", function() {
      expect(ruff).toBe('Woof woof');
    });

  })

  describe('Problem 6 - ', function() {
    it('looper should exist', function() {
      expect(looper).toBeDefined()
      expect(typeof looper).toBe('function')
    })
    it('looper should return 1109 when passed [1, 2, 3, 5, 100, 1000, 6]', function() {
      expect(looper([1, 2, 3, 5, 100, 1000, 6])).toEqual(1109)
    })
    it('looper should loop through the array and sum all odd numbers & number greater than 100 (inclusive)', function() {
      myArr = [3, 5, 250, 4, 2]
      let correct = looper(myArr) === 258
      expect(correct).toEqual(true)
    })
  })

  describe('Problem 7 - ', function() {

    it("add should exist", function() {
      expect(add).toBeDefined();
    });
    it("add should return the sum of its two parameters", function() {
      expect(add(1, 2) === 3 && add('hello', 'world') === 'helloworld').toBe(true);
    });

    it("mathSum should be 7", function() {
      expect(mathSum === 7 && math(5, 9, add) === 14).toBe(true);
    });

  })

  describe('Problem 8 - ', function() {

    it("invoker should exist", function() {
      expect(invoker).toBeDefined();
    });
    it("invoker should return 'I am a callback function' when passed sampleCallbackOne", function() {
      expect(invoker(sampleCallbackOne)).toBe('I am a callback function');
    });
    it("invoker should return 'I am also a callback function' when passed sampleCallbackTwo", function() {
      expect(invoker(sampleCallbackTwo)).toBe('I am also a callback function');
    });
    it("invoker should return 'ducks are cute' when passed the anonymous function () => 'ducks are cute'", function() {
      expect(invoker(() => 'ducks are cute')).toBe('ducks are cute');
    });


  })

  describe('Problem 9 - ', function() {

    it("globalScope should contain only variables accessible in the global scope", function() {
      let containsGlobals = arrayIncludes(globalScope, ["duck"])
      let containsOutOfScopeVars = (globalScope.includes("sailorDuck") &&
        globalScope.includes("rubberDuck") &&
        globalScope.includes("realDuck"))
      expect(containsGlobals && !containsOutOfScopeVars).toBe(true);
    });
    it("bathroomScope should contain only variables accessible in the scope of the function bathroom", function() {
      let containsGlobals = arrayIncludes(bathroomScope, ["duck", "rubberDuck"])
      let containsOutOfScopeVars = (bathroomScope.includes("sailorDuck") &&
        bathroomScope.includes("realDuck"))
      expect(containsGlobals && !containsOutOfScopeVars).toBe(true);
    });
    it("bathtubScope should contain only variables accessible in the scope of the function bathtub", function() {
      let containsGlobals = arrayIncludes(bathtubScope, ["duck", "rubberDuck", "sailorDuck"])
      let containsOutOfScopeVars = bathtubScope.includes("realDuck")
      expect(containsGlobals && !containsOutOfScopeVars).toBe(true);
    });
    it("pondScope should contain only variables accessible in the scope of the function pond", function() {
      let containsGlobals = arrayIncludes(pondScope, ["duck", "realDuck"])
      let containsOutOfScopeVars = (pondScope.includes("sailorDuck") &&
        pondScope.includes("rubberDuck"))
      expect(containsGlobals && !containsOutOfScopeVars).toBe(true);
    });

  })

  describe('Problem 10 - ', function() {

    it("outerFn should exist", function() {
      expect(outerFn).toBeDefined();
    });
    it("outerFn should return a function", function() {
      expect(typeof outerFn()).toBe('function');
    });
    it("outerFn should return a function that returns a string", function() {
      expect(typeof outerFn()()).toBe('string');
    });

    it("innerFn should exist", function() {
      expect(outerFn).toBeDefined();
    });
    it("innerFn should be a function", function() {
      expect(typeof innerFn).toBe('function');
    });
    it("innerFn should return a string", function() {
      expect(typeof innerFn()).toBe('string');
    });

    it("finalResult should exist", function() {
      expect(finalResult).toBeDefined();
    });
    it("innerFn should return a string", function() {
      expect(typeof finalResult).toBe('string');
    });


  })

})
