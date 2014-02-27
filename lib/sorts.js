module.exports = (function() {
  var noob = {};

  // Bubble Sort algorithm
  // ---------------------

  /*
  pseudocode from wikipedia:
  procedure bubbleSort( A : list of sortable items )
     repeat     
       swapped = false
       for i = 1 to length(A) - 1 inclusive do:
         // if this pair is out of order 
         if A[i-1] > A[i] then
           // swap them and remember something changed
           swap( A[i-1], A[i] )
           swapped = true
         end if
       end for
     until not swapped
  end procedure
  */

  noob.bubbleSort = function( list ) {
    var swapped, i, temp;
    do {
      swapped = false;

      for( i = 0; i < list.length - 1; i++ ) {
        if( list[i] > list[i + 1] ) {
          temp = list[i + 1];
          list[i + 1] = list[i];
          list[i] = temp;
          swapped = true;
        }
      }
    } while( swapped );

    return list;
  };

  // Optimized bubble sort algorithm
  //--------------------------------

  /*
  pseudocode from wikidia:
  procedure bubbleSort( A : list of sortable items )
      n = length(A)
      repeat
         swapped = false
         for i = 1 to n-1 inclusive do
            if A[i-1] > A[i] then
               swap(A[i-1], A[i])
               swapped = true
            end if
         end for
         n = n - 1
      until not swapped
  end procedure
  */

  noob.optimizedBubbleSort = function( list ) {
    var swapped, i, temp,
        length = list.length;

    do {
      swapped = false;

      for( i = 0; i < length - 1; i++ ) {
        if( list[i] > list[i + 1] ) {
          temp = list[i + 1];
          list[i + 1] = list[i];
          list[i] = temp;
          swapped = true;
        }
      }
      length--;
    } while( swapped );

    return list;
  };


  // Insertion Sort algorithm
  // ------------------------

  /*
    pseudocode from wikipedia
    for i ← 1 to length(A)
      j ← i
      while j > 0 and A[j-1] > A[j]
          swap A[j] and A[j-1]
          j ← j - 1
  */

  noob.insertionSort = function( list ) {
    var j, i, temp;
    for( i = 1; i < list.length; i++ ) {
      j = i;

      while( j > 0 && list[j - 1] > list[j] ) {
        temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
        j--;
      }
    }

    return list;
  };

  // Optimized Insertion Sort algorithm
  // ------------------------

  /*
    for i ← 1 to length(A)
      x ← A[i]
      j ← i
      while j > 0 and A[j-1] > x
          A[j] ← A[j-1]
          j ← j - 1
      A[j] ← x
  */

  noob.optimizedInsertionSort = function( list ) {
    var i, j, x;

    for( i = 1; i < list.length; i++ ) {
      x = list[i];
      j = i;

      while( j > 0 && list[j - 1] > x ) {
        list[j] = list[j - 1];
        j--;
      }

      list[j] = x;
    }

    return list;
  };

  // Selection Sort algorithm
  // --------------------------

  /*
    pseudocode from http://freefeast.info/general-it-articles/selection-sort-pseudo-code-of-selection-sort-selection-sort-in-data-structure/
    SELECTION-SORT(A)
    1.      for j ← 1 to n-1
    2.            smallest ← j
    3.            for i ← j + 1 to n
    4.                     if A[ i ] < A[ smallest ]
    5.                          smallest ← i
    6.             Exchange A[ j ] ↔ A[ smallest ]
  */

  noob.selectionSort = function( list ) {
    var i, j, smallest, temp;
    for( i = 0; i < list.length - 1; i++ ) {
      smallest = i;
      
      for( j = i; j < list.length; j++ ) {
        if( list[j] < list[ smallest ] ) {
          smallest = j;
        }
      }

      temp = list[i];
      list[i] = list[smallest];
      list[smallest] = temp;
    }

    return list;
  };

  // Quick Sort algorithm
  // ----------------------

  /*
    pseudocode from wikipedia
    function quicksort(array)
     if length(array) ≤ 1
         return array  // an array of zero or one elements is already sorted
     select and remove a pivot element pivot from 'array'  // see '#Choice of pivot' below
     create empty lists less and greater
     for each x in array
         if x ≤ pivot then append x to less
         else append x to greater
     return concatenate(quicksort(less), list(pivot), quicksort(greater)) // two recursive calls
  */

  noob.quickSort = quickSort = function( list ) {
    if( list.length <= 1 ) {
      return list;
    }

    // Some implementations use the first or last element as the 
    // pivot; however, if the list is already ordered, that would
    // be the slowest implementation
    var pivot = list.splice( Math.floor( list.length / 2 ), 1 )[0],
        less = [], 
        greater = [],
        i;

    for( i = 0; i < list.length; i++ ) {
      if( list[i] <= pivot ) {
        less.push( list[i] );
      } else {
        greater.push( list[i] );
      }
    }

    return Array.prototype.concat.call( quickSort( less ), pivot, quickSort( greater ));
  };

  // In-Place Quick Sort algorithm
  // -------------------------------

  /*
    // pseudocode from wikipedia
    // left is the index of the leftmost element of the subarray
    // right is the index of the rightmost element of the subarray (inclusive)
    // number of elements in subarray = right-left+1
    function partition(array, left, right, pivotIndex)
       pivotValue := array[pivotIndex]
       swap array[pivotIndex] and array[right]  // Move pivot to end
       storeIndex := left
       for i from left to right - 1  // left ≤ i < right
           if array[i] <= pivotValue
               swap array[i] and array[storeIndex]
               storeIndex := storeIndex + 1  // only increment storeIndex if swapped
       swap array[storeIndex] and array[right]  // Move pivot to its final place
       return storeIndex

    function quicksort(array, left, right)
     // If the list has 2 or more items
     if left < right
         // See "#Choice of pivot" section below for possible choices
         choose any pivotIndex such that left ≤ pivotIndex ≤ right
         // Get lists of bigger and smaller items and final position of pivot
         pivotNewIndex := partition(array, left, right, pivotIndex)
         // Recursively sort elements smaller than the pivot (assume pivotNewIndex - 1 does not underflow)
         quicksort(array, left, pivotNewIndex - 1)
         // Recursively sort elements at least as big as the pivot (assume pivotNewIndex + 1 does not overflow)
         quicksort(array, pivotNewIndex + 1, right)
  */

  noob.inplaceQuickSort = inplaceQuickSort = function( list, left, right ) {
    if( left === undefined ) {
      left = 0;
      right = list.length - 1;
    }
    var pivotIndex, pivotNewIndex;
    if( list.length < 2 ) {
      return list;
    }
    if( left < right ) {
      pivotIndex = Math.floor( (right - left) / 2 ) + left;
      pivotNewIndex = _partition( list, left, right, pivotIndex );

      inplaceQuickSort( list, left, pivotNewIndex - 1 );
      inplaceQuickSort( list, pivotNewIndex + 1, right );
    }
    
    return list;
  };

  // Helper function for inplaceQuickSort
  function _partition( list, left, right, pivotIndex ) {
    var pivotValue = list[ pivotIndex ];
    list[ pivotIndex ] = list[ right ];
    list[ right ] = pivotValue;
    var storeIndex = left,
        temp;

    for( ; left < right; left++ ) {
      if( list[ left ] <= pivotValue ) {
        temp = list[storeIndex];
        list[storeIndex] = list[left];
        list[left] = temp;
        storeIndex++;
      }
    }

    temp = list[storeIndex];
    list[storeIndex] = list[right];
    list[right] = temp;

    return storeIndex;
  }

  // Speed tests
  noob.testSpeed = function( testSize, rounds ) {
    var testArrays = [],
        algorithms = Array.prototype.slice.call( arguments, 2 ),
        results = [],
        i, j;

    for( i = 0; i < rounds; i++ ) {
      testArrays[i] = [];
      for( j = 0; j < testSize; j++ ) {
        testArrays[i].push( Math.ceil( Math.random() * testSize ));
      }
    }

    for( i = 0; i < algorithms.length; i++ ) {
      for( j = 0; j < rounds; j++ ) {
        if( !results[i] ) {
          results[i] = [];
        }
        results[i].push( noob.testAlgorithm( algorithms[i], testArrays[j] ));
      }
    }

    return results;
  };

  noob.testAlgorithm = function( algorithm, set ) {
    var clone = set.slice(),
        start = new Date().getTime(),
        end;

    algorithm( clone );

    end = new Date().getTime();

    return end - start;
  };

  var booyah = ['',
      'BBBBBBBBBBBB                                                          BBBB          BBBB',
      'BBBBBBBBBBBBBB                                                        BBBB          BBBB',
      'BBBBB     BBBB                                                        BBBB          BBBB',
      'BBBBB     BBBB                                                        BBBB          BBBB',
      'BBBBB    BBBB                                                         BBBB          BBBB',
      'BBBBBBBBBBBB      BBBBBBB       BBBBBBB  BBBB       BBBB BBBBBBBB BBB BBBB  BBBB    BBBB',
      'BBBBBBBBBBBB    BBBBBBBBBBB   BBBBBBBBBBB BBBB     BBBB BBBBB BBBBBBB BBBBBBBBBBBB  BBBB',
      'BBBBB    BBBB  BBBB     BBBB BBBB     BBBB BBBB   BBBB BBBB     BBBBB BBBBBBB  BBBB BBBB',
      'BBBBB     BBBB BBB       BBB BBB       BBB  BBBB BBBB  BBB       BBBB BBBBB    BBBB BBBB',
      'BBBBB     BBBB BBBB     BBBB BBBB     BBBB   BBBBBBB   BBBB     BBBBB BBBB     BBBB',
      'BBBBBBBBBBBBBB  BBBB   BBBB   BBBB   BBBB     BBBBB     BBBB   BBBBBB BBBB     BBBB BBBB',
      'BBBBBBBBBBBBB     BBBBBBB       BBBBBBB       BBBB        BBBBBBB BBB BBBB     BBBB BBBB',
      '                                             BBBB                          ',
      '                                            BBBB                            ',
      '                                           BBBB                           '];

  noob.celebrate = function() {
    booyah.forEach( function( row ) {
      console.log( row );
    });
  };

  return noob;
})();



