describe('fns-and-scope', function () {


	describe('isTyler', function () {
		it('should exist', function () {
			expect(isTyler).toBeDefined();
		})
		it('should return true if passed "Tyler"', function () {
			expect(isTyler('Tyler')).toBe(true);
		})
		it('should return false if passed something other than "Tyler"', function () {
			expect(isTyler('Stan')).toBe(false);
		})
	})

	describe('getName', function () {
		beforeEach(function () {
			// var prompt = function () {
			// 	return true;
			// }
		
			spyOn(window, 'prompt').and.returnValue('My Name');

		})
		it('should exist', function () {
			expect(getName).toBeDefined();
		})
		it('should invoke prompt()', function () {
			getName();
			expect(window.prompt).toHaveBeenCalled();
		})
		it('should return the name input from the prompt', function () {
			var name = getName();
			expect(name).toBe('My Name');
		})
	})

	describe('welcome', function () {
		beforeEach(function () {
			spyOn(window, 'prompt').and.returnValue('Rockstar');
			spyOn(window, 'alert').and.returnValue('Welcome ' + prompt());
			spyOn(window, 'getName').and.returnValue('Rockstar');
			// var getName = jasmine.createSpy().and.returnValue('Rockstar');
		})
		it('should exist', function () {
			expect(welcome).toBeDefined();
		})
		it('should invoke getName()', function () {
			welcome();
			expect(getName).toHaveBeenCalled();
		})
		it('should invoke alert()', function () {
			welcome();
			expect(alert).toHaveBeenCalled();
		})
		it('should alert "Welcome, " plus the name', function () {
			welcome();
			expect(alert).toHaveBeenCalledWith('Welcome, Rockstar')
		})
	})

	describe('myName', function () {
		it('should exist', function () {
			expect(myName).toBeDefined();
		})
		it('should return a string', function () {
			var name = myName();
			expect(name).toEqual(jasmine.any(String));
		})
	})

	describe('newMyName', function () {
		it('should exist', function () {
			expect(newMyName).toBeDefined();
		})
		it('should be a function', function () {
			expect(newMyName).toEqual(jasmine.any(Function));
		})
	})

	describe('outerFn', function () {
		it('should exist', function () {
			expect(outerFn).toBeDefined();
		})
		it('should return a function', function () {
			var fn = outerFn();
			expect(fn).toEqual(jasmine.any(Function));
		})
		it('should return a function that returns a string', function () {
			var fn = outerFn();
			var str = fn();
			expect(str).toEqual(jasmine.any(String));
		})
	})

	describe('innerFn', function () {
		it('should exist', function () {
			expect(innerFn).toBeDefined();
		})
		it('should be a function', function () {
			expect(innerFn).toEqual(jasmine.any(Function));
		})
		it('should return a string', function () {
			var str = innerFn();
			expect(str).toEqual(jasmine.any(String));
		})
	})

})