'use strict';

var structs = require('../lib/structs.js'),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

describe('Booyah should celebrate success', function() {
  structs.celebrate();
});

// Singly linked lists
describe('User should be able to create a linked list and call its methods.', function() {
  it('should create a linked list when passed an array', function() {
    var list = new structs.SinglyLinkedList( [1,2,3] );

    expect( list ).to.be.ok;
    expect( list.data ).to.equal( 1 );
    expect( list instanceof structs.SinglyLinkedList ).to.be.ok;
  });

  it('should allow you to add a node to the beginning of a list', function() {
    var list = new structs.SinglyLinkedList( [1,2,3] );
    list.addFirst(9);
    expect( list.data ).to.equal(9);
  });

  it('should allow you to add a node to the end of a list', function() {
    var list = new structs.SinglyLinkedList( [1,2,3] );
    list.addLast(9);
    expect( list.next.next.next.data ).to.equal(9);
  });

  it('should allow you to add a node at a specified index in a list', function() {
    var list = new structs.SinglyLinkedList( [1,2,3] );
    list.addAt( 9, 1 );
    expect( list.next.data ).to.equal(9);
  });

  it('should allow you to remove the first node and return the value', function() {
    var list = new structs.SinglyLinkedList( [1,2,3] );
    var value = list.removeFirst();
    expect( list.data ).to.equal(2);
    expect( value ).to.equal(1);
  });

  it('should allow you to remove the last node and return the value', function() {
    var list = new structs.SinglyLinkedList( [1,2,3] );
    var value = list.removeLast();
    expect( list.next.next ).to.equal(null);
    expect( value ).to.equal(3);
  });

  it('should allow you to remove a node at a particular index and return the value', function() {
    var list = new structs.SinglyLinkedList( [1,2,3] );
    var value = list.removeAt(1);
    expect( list.next.data ).to.equal(3);
    expect( value ).to.equal(2);
  });
});

