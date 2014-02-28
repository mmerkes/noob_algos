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
    expect( sorts.testSorterAccuracy( sorts.bubbleSort, 1000 ) ).to.be.ok;
  });
});

// Optimized Bubble Sort
describe('Bubble sort should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.testSorterAccuracy( sorts.optimizedBubbleSort, 1000 ) ).to.be.ok;
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
    expect( sorts.testSorterAccuracy( sorts.insertionSort, 1000 ) ).to.be.ok;
  });
});

// Optimized Insertion Sort
describe('Optimized Insertion sorts should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.testSorterAccuracy( sorts.optimizedInsertionSort, 1000 ) ).to.be.ok;
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
    expect( sorts.testSorterAccuracy( sorts.selectionSort, 1000 ) ).to.be.ok;
  });
});

// Test the Quick Sort
describe('Quick sort should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.testSorterAccuracy( sorts.quickSort, 100000 ) ).to.be.ok;
  });
});

// In-Place Quick Sort
describe('In-Place Quick sorts should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.testSorterAccuracy( sorts.inplaceQuickSort, 100000 ) ).to.be.ok;
  });

  it('should be faster than a regular quick sort', function() {
    var results = sorts.testSpeed( 100000, 5, sorts.quickSort, 
                                  sorts.inplaceQuickSort );

    var time = { simple: 0, optimized: 0 };

    for( var i = 0; i < 5; i++ ) {
      time.simple += results[0][i];
      time.optimized += results[1][i];
    }

    expect( time.simple ).to.be.greaterThan( time.optimized );
  });
});

// Test the Merge Sort
describe('Merge sort should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.testSorterAccuracy( sorts.mergeSort, 100000 ) ).to.be.ok;
  });
});

// Test the Shell Sort
describe('Shell sort should take an array and sort it', function() {
  it('should properly sort an array', function() {
    expect( sorts.testSorterAccuracy( sorts.shellSort, 100000 ) ).to.be.ok;
  });
});




