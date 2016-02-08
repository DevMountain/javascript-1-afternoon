describe('closures', function () {

	describe('inner', function () {
		it('should exist', function () {
			expect(inner).toBeDefined();
		})
		it('should be a function', function () {
			expect(inner).toEqual(jasmine.any(Function));
		})
		it('should be the outer function', function () {
			expect(JSON.stringify(inner)).toEqual(JSON.stringify(outer()));
		})
	})



	describe('makeCounter', function () {
		it('should exist', function () {
			expect(makeCounter).toBeDefined();
		})
		it('should be a function', function () {
			expect(makeCounter).toEqual(jasmine.any(Function));
		})
		it('should return a function', function () {
			expect(makeCounter()).toEqual(jasmine.any(Function));
		})
		it('should make count() increment', function () {
			var count = makeCounter();
			var first = count();
			var second = count();
			var third = count();
			expect(first).toBe(1);
			expect(second).toBe(2);
			expect(third).toBe(3);

		})
	})

	describe('codeLove', function () {
		it('should exist', function () {
			expect(codeLove).toBeDefined();
		})
		it('should return the string "I love code"', function () {
			expect(codeLove()).toBe('I love code');
		})
	})

	describe('codeFriend', function () {
		it('should exist', function () {
			expect(codeFriend).toBeDefined();
		});
		it('should return a function', function () {
			expect(codeFriend()).toEqual(jasmine.any(Function));
		})
	})

	describe('codeEcho', function () {
		it('should exist', function () {
			expect(codeEcho).toBeDefined();
		})
		it('should be a function', function () {
			expect(codeEcho).toEqual(jasmine.any(Function));
		})
		it('should invoke codeLove only once', function() {
			var first = codeEcho();
			var second = codeEcho();
			expect(first).toBe('I love code');
		expect(second).toBeNull();
	})
})

describe('fnCounter', function () {
	it('should exist', function () {
		expect(fnCounter).toBeDefined();
	})
	it('should invoke a function N times', function () {
		var fn = function () {
			return 'Hello'
		}
		var count = fnCounter(fn, 1);
		var first = count();
		var second = count();
		expect(first).toBe('Hello');
		expect(second).toBe('STOP')
	})
	
	it('should invoke a function N times (10)', function () {
		var fn = function () {
			return 'Hello'
		}
		var times = 10;
		var count = fnCounter(fn, times);
		for (var i = 0; i < times; i++){
			expect(count()).toBe('Hello');
		}
		expect(count()).toBe('STOP')
	})
	})

describe('funcArray', function () {
	it('should exist', function () {
		expect(funcArray).toBeDefined();
	})
	it('should contain exactly six elements', function () {
		expect(funcArray.length).toBe(6);
	})
	it('should return the correct values', function () {
		expect(funcArray[0]()).toBe(0);
		expect(funcArray[1]()).toBe(1);
		expect(funcArray[2]()).toBe(2);
		expect(funcArray[3]()).toBe(3);
		expect(funcArray[4]()).toBe(4);
		expect(funcArray[5]()).toBe(5);
	})
})

});