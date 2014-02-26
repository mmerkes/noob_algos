// Bubble Sort algorithm
function bubbleSort( list ) {
  var swapped, i, temp;
  do {
    swapped = false;

    for( i = 0; i < list.length - 1; i++ ) {
      if( list[i] > list[i + 1]) {
        temp = list[i + 1];
        list[i + 1] = list[i];
        list[i] = temp;
        swapped = true;
      }
    }
  } while( swapped );

  return list;
}
