module.exports = (function() {
  var noob = {};

  // Bubble Sort algorithm

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
        results[i].push( testAlgorithm( algorithms[i], testArrays[j] ));
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

  return noob;
})();








