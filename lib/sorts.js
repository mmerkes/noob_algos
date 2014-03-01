module.exports = (function() {
  var sorts = {};

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

  sorts.bubbleSort = function( list ) {
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

  sorts.optimizedBubbleSort = function( list ) {
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

  sorts.insertionSort = function( list ) {
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

  sorts.optimizedInsertionSort = function( list ) {
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

  sorts.selectionSort = function( list ) {
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

  sorts.quickSort = quickSort = function( list ) {
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

  sorts.inplaceQuickSort = inplaceQuickSort = function( list, left, right ) {
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

  // (Top Down) Merge Sort
  // ---------------------------

  /*
    function merge_sort(list m)
      // Base case. A list of zero or one elements is sorted, by definition.
      if length(m) <= 1
          return m

      // Recursive case. First, *divide* the list into equal-sized sublists.
      var list left, right
      var integer middle = length(m) / 2
      for each x in m before middle
           add x to left
      for each x in m after or equal middle
           add x to right

      // Recursively sort both sublists.
      left = merge_sort(left)
      right = merge_sort(right)
      // *Conquer*: merge the now-sorted sublists.
      return merge(left, right)
  */
  sorts.mergeSort = mergeSort = function( list ) {
    if ( list.length <= 1 ) {
      return list;
    }

    var left = [],
        right = [],
        middle = Math.floor( list.length / 2 ),
        i;

    for( i = 0; i < middle; i++ ) {
      left.push( list[i] );
    }

    for( ; i < list.length; i++ ) {
      right.push( list[i] );
    }

    left = mergeSort( left );
    right = mergeSort( right );

    return _merge( left, right );
  };
  /*
  pseudocode from wikipedia
  function merge(left, right)
    // receive the left and right sublist as arguments.
    // 'result' variable for the merged result of two sublists.
    var list result
    // assign the element of the sublists to 'result' variable until there is no element to merge. 
    while length(left) > 0 or length(right) > 0
        if length(left) > 0 and length(right) > 0
           // compare the first two element, which is the small one, of each two sublists.
            if first(left) <= first(right)
                // the small element is copied to 'result' variable.
                // delete the copied one(a first element) in the sublist.
                append first(left) to result
                left = rest(left)
            else
                // same operation as the above(in the right sublist).
                append first(right) to result
                right = rest(right)
        else if length(left) > 0
            // copy all of remaining elements from the sublist to 'result' variable, 
            // when there is no more element to compare with.
            append first(left) to result
            left = rest(left)
        else if length(right) > 0
            // same operation as the above(in the right sublist).
            append first(right) to result
            right = rest(right)
    end while
    // return the result of the merged sublists(or completed one, finally).
    // the length of the left and right sublists will grow bigger and bigger, after the next call of this function.
    return result
  */
  // mergeSort helper function to merge lists
  function _merge( left, right ) {
    var result = [];

    // Should be able to just get rid of arguments in while loop
    while( left.length || right.length ) {
      if( left.length > 0 && right.length > 0 ) {
        if( left[0] <= right[0] ) {
          result.push( left.shift() );
        } else {
          result.push( right.shift() );
        }
      } 
      else if( left.length ) {
        return result.concat( left );
      } 
      else {
        return result.concat( right );
      }
    }
  }

  // Shell Sort
  // -----------------------------------------

  /*
  pseudocode from wikipedia
  # Sort an array a[0...n-1].
  gaps = [701, 301, 132, 57, 23, 10, 4, 1]

  foreach (gap in gaps)
  {
      # Do an insertion sort for each gap size.
      for (i = gap; i < n; i += 1)
      {
          temp = a[i]
          for (j = i; j >= gap and a[j - gap] > temp; j -= gap)
          {
              a[j] = a[j - gap]
          }
          a[j] = temp
      }

  }
  */

  sorts.shellSort = function( list ) {
    var gap = Math.floor( list.length / 2 ),
        i, j;

    while( gap > 0 ) {
      for( i = gap; i < list.length; i++ ) {
        temp = list[i];
        for( j = i; j >= gap && list[j - gap] > temp; j -= gap ) {
          list[j] = list[j - gap];
        }
        list[j] = temp;
      }

      gap = Math.floor( gap / 2 );
    }

    return list;
  };


  // Utilities
  // ------------------------------------------

  // Speed tests
  sorts.testSpeed = function( testSize, rounds ) {
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
        results[i].push( testAlgorithm( algorithms[i], testArrays[j] ));
      }
    }

    return results;
  };

  var testAlgorithm = sorts.testAlgorithm = function( algorithm, set ) {
    var clone = set.slice(),
        start = new Date().getTime(),
        end;

    algorithm( clone );

    end = new Date().getTime();

    return end - start;
  };

  sorts.testSorterAccuracy = function( algorithm, length ) {
    var testArray = [],
        i;

    for( i = 0; i < length; i++ ) {
      testArray.push( Math.ceil( Math.random() * length ));
    }

    testArray = algorithm( testArray );

    return testSorted( testArray );
  };

  // Test the accuracy of the sort of an array
  var testSorted = sorts.testSorted = function( sorted ) { 
    for( var i = 0; i < sorted.length - 1; i++ ) { 
      if(sorted[i] > sorted[i + 1 ]) 
        return false; 
    } 
    return true; 
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

  sorts.celebrate = function() {
    booyah.forEach( function( row ) {
      console.log( row );
    });
  };

  return sorts;
})();



