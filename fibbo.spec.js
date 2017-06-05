(function(){
    'use-strict';
 
    var chai = require('chai');
    var expect = chai.expect; 
    var fib = require('./fibbo');
 
    describe('Fibonacci series positive scenario', function() {
        it('getFibonacciSeries() should return [ 0, 1, 1, 2, 3, 5, 8 ] if 10 pass as a input', function() {
            var expectResult = [ 0, 1, 1, 2, 3, 5, 8 ];     
            expect(fib.getFibonacciSeries(10)).to.deep.equal(expectResult);
        });
    });
 
    describe('Fibonacci series negitive scenario', function() {
 
        it('getFibonacciSeries() should throw [ Invalid input. ] exception if -10 pass as a input', function() {
            expect(fib.getFibonacciSeries(-10)).to.be.undefined;
        });
    });
 
}());