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

  sList.mergeSorted = function( newList ) {
    var list = this.head;
    this._length = this.getLength() + newList.getLength();

    this.head = _mergeSorted( list, newList.head );

    return this;
  };

  var _mergeSorted = function( list1, list2 ) {
    if( !list1 ) {
      return list2;
    } else if( !list2 ) {
      return list1;
    } else {
      if( list1.data < list2.data ) {
        return {
          data: list1.data,
          next: _mergeSorted( list1.next, list2 )
        };
      }
      return {
        data: list2.data,
        next: _mergeSorted( list1, list2.next )
      };
    }
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
  
  var doublyNode = function(data) {
    return {
      prev: null,
      data: data,
      next: null
    };
  };

  structs.DoublyLinkedList = function() {
    this.head = null;
    this.length = 0;

    return this;
  };

  dList = structs.DoublyLinkedList.prototype;

  dList.addFirst = function(data) {
    var list = this.head;
    var node = new doublyNode(data);
    this.length++;

    if( !this.head ) {
      this.head = node;
      return this;
    }

    list.prev = node;
    node.next = list;
    this.head = node;

    return this;
  };

  dList.removeFirst = function() {
    var data = this.head.data;
    var list = this.head.next;
    list.prev = null;
    this.head = list;

    return data;
  };

// Binary Search Tree
//-----------------------------

  var bstNode = function(data) {
    return {
      left: null,
      root: data,
      right: null
    };
  };

  structs.BinarySearchTree = function( set ) {
    this.root = null;
    
    if( set ) {
      this.arrayToBST( set );
    } 

    return this;
  };

  bst = structs.BinarySearchTree.prototype;

  bst.arrayToBST = function( set ) {
    this.root = _arrayToBST( set );

    return this;
  };

  var _arrayToBST = function( set ) {
    var middle = Math.floor( set.length / 2 );
    var node = new bstNode( set[middle] );

    if( middle === 0 ) {
      node.left = null;
    } else {
      node.left = _arrayToBST( set.slice( 0, middle ) );
    }
    if( middle === set.length - 1 ) {
      node.right = null;
    } else {
      node.right = _arrayToBST( set.slice( middle + 1 ));
    }

    return node;
  };

  bst.rangeSearch = function( min, max ) {
    var tree = this.root;
    var result;

    result = _rangeSearch( tree, min, max );

    return result;
  };

  var _rangeSearch = function( tree, min, max ) {
    var root = tree.root;
    var left = tree.left;
    var right = tree.right;
    var results = [];
    if( left !== null && left.root >= min ) {
      results.push( _rangeSearch( left, min, max ) );
    }

    if( root <= max && root >= min ) {
      results.push( root );
    }

    if( right !== null && ( right.left && right.left.root <= max || right.root <= max )) {
      results.push( _rangeSearch( right, min, max ) );
    }

    return results;
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

  structs.celebrate = function() {
    booyah.forEach( function( row ) {
      console.log( row );
    });
  };

  return structs;
})();
