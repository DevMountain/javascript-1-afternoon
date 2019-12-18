//Helper Function
function arrayIncludes(arr, values) {
	let allGood = true
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
  describe('Problem 1 - myName', function () {
    it('myName variable should exist', function () {
      expect(myName).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof myName).toBe('string')
    })
  })
  describe('Problem 2 - myAge', function () {
    it('myAge variable should exist', function () {
      expect(myAge).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof myAge).toBe('number')
    })
  })
  describe('Problem 3 - myName', function () {
    it('lovesCode variable should exist', function () {
      expect(lovesCode).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof lovesCode).toBe('boolean')
    })
  })
  describe('Problem 4 - greatestFear', function () {
    it('greatestFear variable should exist', function () {
      expect(greatestFear).toBeUndefined()
    })
  })
  describe('Problem 5 - devMountainGoal', function () {
    it('devMountainGoal variable should exist', function () {
      expect(devMountainGoal).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof devMountainGoal).toBe('object')
    })
  })
	describe('Problem 6 - greeting', function() {
		it('should exist', function() {
			expect(greeting).toBeDefined()
		})
		it('should be made with a function declaration', function() {
			let str = greeting.toString()
			let match = !!str.match(/function greeting\s?\(/)
			expect(match).toBe(true)
		})
		it('should return "Hello, Trogdor" if passed "Trogdor"', function() {
			expect(greeting('Trogdor')).toBe('Hello, Trogdor')
		})
		it('should return "Hello, undefined" if passed nothing', function() {
			expect(greeting()).toBe('Hello, undefined')
		})
	})

	describe('Problem 7 - newGreeting', function() {
		it('should exist', function() {
			expect(newGreeting).toBeDefined()
		})
		it('should be made with an anonymous function assignment', function() {
			let str = newGreeting.toString()
			let match = !!str.match(/function\s*\(/)
			expect(match).toBe(true)
		})
		it('should return "Hello, Trogdor" if passed "Trogdor"', function() {
			expect(newGreeting('Trogdor')).toBe('Hello, Trogdor')
		})
		it('should return "Hello, undefined" if passed nothing', function() {
			expect(newGreeting()).toBe('Hello, undefined')
		})
	})

	describe('Problem 8 - ', function() {
		it('groceries should exist', function() {
			expect(groceries).toBeDefined()
		})
		it('groceries should contain given values', function() {
			let vals = ['apples', 'milk', 'eggs', 'bread']
			let allGood = arrayIncludes(groceries, vals)
			expect(allGood).toBe(true)
		})
	})

	describe('Problem 9 - ', function() {
		it('dog should exist with the right properties', function() {
			expect(dog).toBeDefined()
			expect(typeof dog.name).toEqual('string')
			expect(typeof dog.color).toEqual('string')
			expect(typeof dog.age).toEqual('number')
			expect(typeof dog.goodBoy).toEqual('boolean')
		})
		it('should properly assign the dog name', function() {
			expect(devMountainClassPet).toBe(dog.name)
		})
	})

	describe('Problem 10 - ', function() {
		it('nameCheck should exist', function() {
			expect(nameCheck).toBeDefined()
			expect(typeof nameCheck).toBe('function')
		})
		it('nameCheck should return the correct string when passed Steven', function() {
			expect(nameCheck('Steven')).toEqual('What is up Steven?')
		})
		it('nameCheck should return the correct string when passed Bryan', function() {
			expect(nameCheck('Bryan')).toEqual('Hey Bryan!')
		})
		it('nameCheck should return the correct string when passed Joe', function() {
			expect(nameCheck('Joe')).toEqual('Cool name, Joe')
		})
	})

	describe('Problem 11 - ', function() {
		it('add should exist', function() {
			expect(add).toBeDefined()
		})
		it('add should return the sum of its two parameters', function() {
			expect(add(1, 2) === 3 && add('hello', 'world') === 'helloworld').toBe(true)
		})

		it('mathSum should be 7', function() {
			expect(mathSum === 7).toBe(true)
		})
	})

	describe('Problem 12 - ', function() {
		it('faveColorFinder should exist', function() {
			expect(faveColorFinder).toBeDefined()
			expect(typeof faveColorFinder).toBe('function')
		})
		it('faveColorFinder should return the correct string when passed red', function() {
			expect(faveColorFinder('red')).toEqual('red is a great color')
		})
		it('faveColorFinder should return the correct string when passed green', function() {
			expect(faveColorFinder('green')).toEqual('green is a solid favorite color')
		})
		it('faveColorFinder should return the correct string when passed black', function() {
			expect(faveColorFinder('black')).toEqual('so trendy')
		})
		it('faveColorFinder should return the correct string when passed any other color', function() {
			expect(faveColorFinder('orange')).toEqual(
				'you need to evaluate your favorite color choice'
			)
		})
	})

	describe('Problem 13 - ', function() {
		it('globalScope should contain only variables accessible in the global scope', function() {
			let containsGlobals = arrayIncludes(globalScope, ['duck'])
			let containsOutOfScopeVars =
				globalScope.includes('sailorDuck') &&
				globalScope.includes('rubberDuck') &&
				globalScope.includes('realDuck')
			expect(containsGlobals && !containsOutOfScopeVars).toBe(true)
		})
		it('bathroomScope should contain only variables accessible in the scope of the function bathroom', function() {
			let containsGlobals = arrayIncludes(bathroomScope, ['duck', 'rubberDuck'])
			let containsOutOfScopeVars =
				bathroomScope.includes('sailorDuck') || bathroomScope.includes('realDuck')
			expect(containsGlobals && !containsOutOfScopeVars).toBe(true)
		})
		it('bathtubScope should contain only variables accessible in the scope of the function bathtub', function() {
			let containsGlobals = arrayIncludes(bathtubScope, [
				'duck',
				'rubberDuck',
				'sailorDuck'
			])
			let containsOutOfScopeVars = bathtubScope.includes('realDuck')
			expect(containsGlobals && !containsOutOfScopeVars).toBe(true)
		})
		it('pondScope should contain only variables accessible in the scope of the function pond', function() {
			let containsGlobals = arrayIncludes(pondScope, ['duck', 'realDuck'])
			let containsOutOfScopeVars =
				pondScope.includes('sailorDuck') && pondScope.includes('rubberDuck')
			expect(containsGlobals && !containsOutOfScopeVars).toBe(true)
		})
	})

	describe('Problem 14 - ', function() {
		let testAge = age
		it('age should exist', function() {
			expect(age).toBeDefined()
		})
		it('age should be a number', function() {
			expect(typeof age).toBe('number')
		})
		it('age should be the correct number', function() {
			let secondAge = testAge++
			expect(secondAge === age).toBe(true)
		})
    it('age should be the correct number', function () {
      testAge = 999
      expect(age === testAge).toBe(true)
    })
	})
})
