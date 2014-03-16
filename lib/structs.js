// JavaScript Data Structures
module.exports = (function() {
  var structs = {};

  // For saving values in recursive methods
  var temp;

// Singly Linked List
//----------------------------------------------
  var singlyNode = function( data ) {
    return {
      data: data,
      next: null
    };
  };

  structs.SinglyLinkedList = function() {
    this.head = null;
    this._length = 0;

    return this;
  };

  var sList = structs.SinglyLinkedList.prototype;

  sList.addFirst = function( data ) {
    var node = new singlyNode( data );
    node.next = this.head;

    this.head = node;
    this._length++;

    return this;
  };

  sList.addArray = function( set ) {
    for( var i = 0; i < set.length; i++ ) {
      this.addFirst( set[i] );
    }
    return this;
  };

  sList.removeFirst = function() {
    var data = this.head.data;
    this.head = this.head.next;
    this._length--;

    return data;
  };

  sList.contains = function( value ) {
    var list = this.head;

    while( list ) {
      if( list.data === value ) {
        return true;
      }
      list = list.next;
    }
    return false;
  };

  sList.getLength = function() {
    return this._length;
  };

  sList.isEmpty = function() {
    return this.head ? false : true;
  }

  sList.addLast = function( value ) {
    var list = this.head;
    if( !list ) {
      this.head = new singlyNode( value );

      return this;
    }
    list.next = _addLast( list.next, value );

    this.head = list;
    return this;
  };

  var _addLast = function( list, value ) {
    if( !list ) {
      return new singlyNode( value );
    }

    return {
      data: list.data,
      next: _addLast( list.next, value )
    };
  };

  sList.removeLast = function() {
    var list = this.head;
    if( !list ) {
      return null;
    } 
    else if ( list.next === null ) {
      this.head = null;
      return list.data;
    }

    list = _removeLast( list );
    this.head = list;

    return temp;
  };

  var _removeLast = function( list ) {
    if( !list.next ) {
      temp = list.data;
      return null;
    }
    return {
      data: list.data,
      next: _removeLast( list.next )
    };
  };

  sList.addAt = function( value, index ) {
    var list = this.head;

    list = _addAt( list, value, index );

    this.head = list;

    return this;
  };

  var _addAt = function( list, value, index ) {
    if( index === 0 ) {
      var node = new singlyNode( value );
      node.next = list;
      return node;
    }
    return {
      data: list.data,
      next: _addAt( list.next, value, index - 1 )
    };
  };

  sList.removeAt = function( index ) {
    var list = this.head;

    list = _removeAt( list, index );
    this.head = list;

    return temp;
  };

  var _removeAt = function( list, index ) {
    if( index === 0 ) {
      temp = list.data;
      return list.next;
    }
    return {
      data: list.data,
      next: _removeAt( list.next, index - 1 )
    };
  };

  sList.clear = function() {
    this.head = null;

    return this;
  };

  sList.reverse = function() {
    var accumulator = new singlyNode( this.head.data );

    this.head = _reverse( this.head.next, accumulator );

    return this;
  };

  var _reverse = function( list, accumulator ) {
    if( !list ) {
      return accumulator; 
    }
    return _reverse( list.next, {
      data: list.data,
      next: accumulator
    });
  };

  /*
    getAt
    getFirst
    getLast
    toArray
    addListFirst
    addListLast
    addListAt
    max
    min 
  */

// Doubly Linked List
//------------------------------------
  

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
