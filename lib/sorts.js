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



