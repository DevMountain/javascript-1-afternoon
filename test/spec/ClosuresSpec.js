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

	describe('makeCall', function () {
		it('should exist', function () {
			expect(makeCall).toBeDefined();
		})
		it('should be a function', function () {
			expect(makeCall).toEqual(jasmine.any(Function));
		})
		it('should be the callFriend function', function () {
			expect(JSON.stringify(makeCall)).toEqual(JSON.stringify(callFriend()));
		})
		//it('should return Calling Jake at 435-215-9248', function () {
		//	expect( makeCall('435-215-9248')).toBe('Calling Jake at 435-215-9248');
        //
		//})
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