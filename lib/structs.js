// JavaScript Data Structures
module.exports = (function() {
  var structs = {};

// Singly Linked List
//----------------------------------------------
  structs.SinglyLinkedList = function( list ) {
    this.next = _initializeSinglyTail( list );
    this.data = list[0];

    return this;
  };

  var _initializeSinglyTail = function(list) {
    var newList = null;

    for( var i = list.length - 1; i > 0; i-- ) {
      newList = {
        data: list[i],
        next: newList
      };
    }
    return newList;
  };

  var sList = structs.SinglyLinkedList.prototype;

  sList.addFirst = function( value ) {
    this.next = {
      data: this.data,
      next: this.next
    };

    this.data = value;

    return this;
  };

  sList.addLast = function( value ) {
    this.next = _addLast( this.next, value );
  };

  var _addLast = function( list, value ) {
    if( !list ) {
      return {
        data: value,
        next: null
      };
    }

    return {
      data: list.data,
      next: _addLast( list.next, value )
    };
  }

  sList.addAt = function( value, index ) {
    var list = _addAt( {
      data: this.data,
      next: this.next
    }, value, index );

    this.data = list.data;
    this.next = list.next;
  };

  var _addAt = function( list, value, index ) {
    console.log('Value = ' + value);
    console.log('Index = ' + index);
    if( index === 0 ) {
      return {
        data: value,
        next: list
      };
    }
    return {
      data: list.data,
      next: _addAt( list.next, value, index - 1 )
    };
  };

  /*
    removeFirst
    removeLast
    addAt
    removeAt
    getAt
    getFirst
    getLast
    reverse
    addListFirst
    addListLast
    addListAt
    clear
    contains
    max
    min 
  */

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

  structs.celebrate = function() {
    booyah.forEach( function( row ) {
      console.log( row );
    });
  };

  return structs;
})();
