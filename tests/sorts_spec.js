'use strict';

var sorts = require('../lib/sorts.js'),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

// Test the Bubble Sort
describe('Bubble sorts should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.bubbleSort( [ 6,5,4,3,2,1 ] ).join('') ).to.equal('123456');
  });
});

// Optimized Bubble Sort
describe('Bubble sorts should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.optimizedBubbleSort( [ 6,5,4,3,2,1 ] ).join('') ).to.equal('123456');
  });

  it('should be faster than a regular bubble sort', function() {
    var testArray = [], 
        clone, start, end, 
        times = {};

    for( var i = 10000; i > 0; i-- ) {
      testArray.push(i);
    }

    clone = testArray.slice();
    start = new Date().getTime();
    sorts.bubbleSort( clone );
    end = new Date().getTime();
    times.simple = end - start;

    clone = testArray.slice();
    start = new Date().getTime();
    sorts.optimizedBubbleSort( clone );
    end = new Date().getTime();
    times.optimized = end - start;

    expect( times.simple ).to.be.above( times.optimized );
  });
});
