'use strict';

var sorts = require('../lib/sorts.js'),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

describe('Booyah should celebrate success', function() {
  sorts.celebrate();
});

// Test the Bubble Sort
describe('Bubble sort should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.bubbleSort( [ 6,5,4,3,2,1 ] ).join('') ).to.equal('123456');
  });
});

// Optimized Bubble Sort
describe('Bubble sort should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.optimizedBubbleSort( [ 6,5,4,3,2,1 ] ).join('') ).to.equal('123456');
  });

  it('should be faster than a regular bubble sort', function() {
    var results = sorts.testSpeed( 1000, 5, sorts.bubbleSort, 
                                  sorts.optimizedBubbleSort );
    var time = { simple: 0, optimized: 0 };

    for( var i = 0; i < 5; i++ ) {
      time.simple += results[0][i];
      time.optimized += results[1][i];
    }

    expect( time.simple ).to.be.greaterThan( time.optimized );
  });
});

// Test the Insertion Sort
describe('Insertion sort should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.insertionSort( [ 6,5,4,3,2,1 ] ).join('') ).to.equal('123456');
  });
});

// Optimized Insertion Sort
describe('Insertion sorts should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.optimizedInsertionSort( [ 6,5,4,3,2,1 ] ).join('') ).to.equal('123456');
  });

  it('should be faster than a regular insertion sort', function() {
    var results = sorts.testSpeed( 1000, 5, sorts.insertionSort, 
                                  sorts.optimizedInsertionSort );

    var time = { simple: 0, optimized: 0 };

    for( var i = 0; i < 5; i++ ) {
      time.simple += results[0][i];
      time.optimized += results[1][i];
    }

    expect( time.simple ).to.be.greaterThan( time.optimized );
  });
});

// Test the Selection Sort
describe('Selection sort should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.selectionSort( [ 6,5,4,3,2,1 ] ).join('') ).to.equal('123456');
  });
});

// Test the Quick Sort
describe('Quick sort should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.quickSort( [ 6,5,4,3,2,1 ] ).join('') ).to.equal('123456');
  });
});




