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
  it('should create an empty linked list', function() {
    var list = new structs.SinglyLinkedList();

    expect( list ).to.be.ok;
    expect( list.head ).to.equal( null );
  });

  // addFirst()
  it('should allow you to add a node to the beginning of a list', function() {
    var list = new structs.SinglyLinkedList();
    list.addFirst(9);
    expect( list.head.data ).to.equal(9);
  });

  // addArray()
  it('should allow you to add an array of values to the list', function() {
    var list = new structs.SinglyLinkedList();
    list.addFirst(9);
    list.addArray( [8, 7, 6] );
    expect( list.head.data ).to.equal(6);
    expect( list.head.next.next.data ).to.equal(8);
  });

  // removeFirst()
  it('should allow you to remove the first node and return the value', function() {
    var list = new structs.SinglyLinkedList();
    list.addFirst(9);
    list.addFirst(8);
    var value = list.removeFirst();
    expect( list.head.data ).to.equal(9);
    expect( value ).to.equal(8);
  });

  // contains()
  it('should allow you to check if it contains a particular value', function() {
    var list = new structs.SinglyLinkedList();
    list.addFirst(9);
    list.addFirst(8);
    list.addFirst(7);

    expect( list.contains( 8 ) ).to.be.ok;
    expect( list.contains( 6 ) ).to.not.be.ok;
  });

  // getLength()
  it('should allow you to get the length of a list', function() {
    var list = new structs.SinglyLinkedList();
    expect( list.getLength() ).to.equal(0);
    list.addFirst(9);
    list.addFirst(8);
    expect( list.getLength() ).to.equal(2);
  });

  // isEmpty()
  it('should allow you to check if the list is empty or not', function() {
    var list = new structs.SinglyLinkedList();
    expect( list.isEmpty() ).to.be.ok;
    list.addFirst(9);
    expect( list.isEmpty() ).to.not.be.ok;
  });

  // addLast()
  it('should allow you to add a node to the end of a list', function() {
    var list = new structs.SinglyLinkedList();
    list.addFirst(9);
    list.addFirst(8);
    list.addLast(10);
    expect( list.head.next.next.data ).to.equal(10);
  });

  // removeLast()
  it('should allow you to remove the last node and return the value', function() {
    var list = new structs.SinglyLinkedList();
    expect( list.removeLast() ).to.equal.null;
    list.addFirst(9);
    list.addFirst(8);
    var value = list.removeLast();
    expect( list.head.next ).to.equal(null);
    expect( value ).to.equal(9);
  });

  // addAt()
  it('should allow you to add a node at a specified index in a list', function() {
    var list = new structs.SinglyLinkedList();
    list.addFirst(9);
    list.addFirst(7);
    list.addAt( 8, 1 );
    expect( list.head.next.data ).to.equal(8);
  });

  // removeAt()
  it('should allow you to remove a node at a particular index and return the value', function() {
    var list = new structs.SinglyLinkedList();
    list.addFirst(9);
    list.addFirst(8);
    list.addFirst(7);
    var value = list.removeAt(1);
    expect( list.head.next.data ).to.equal(9);
    expect( value ).to.equal(8);
  });

  // clear()
  it('should allow you to clear the linked list', function() {
    var list = new structs.SinglyLinkedList();
    list.addFirst(9);
    list.addFirst(8);
    list.clear();
    expect( list.head ).to.equal(null);
  });

  // reverse()
  it('should allow you to reverse the linked list', function() {
    var list = new structs.SinglyLinkedList();
    list.addFirst(9);
    list.addFirst(8);
    list.addFirst(7);
    list.reverse();

    expect( list.head.data ).to.equal(9);
    expect( list.head.next.next.data ).to.equal(7);
  });

  // mergeSorted()
  it('should allow you to merge sorted lists', function() {
    var list1 = new structs.SinglyLinkedList();
    list1.addFirst(9);
    list1.addFirst(5);
    list1.addFirst(2);
    var list2 = new structs.SinglyLinkedList();
    list2.addFirst(8);
    list2.addFirst(6);
    list2.addFirst(1);
    var result = "";

    var merged = list1.mergeSorted( list2 ).head;
    while( merged ) {
      result += merged.data;
      merged = merged.next;
    };

    expect( result ).to.equal('125689');
    expect( merged ).to.equal(null);
    expect( list1.getLength() ).to.equal(6);
  });
});

// Doubly Linked List
describe('User should be able to create a doubly linked list and call its methods', function() {
  it('should create an empty doubly linked list', function() {
    var list = new structs.DoublyLinkedList();

    expect( list ).to.be.ok;
    expect( list.head ).to.equal(null);
  });

  // addFirst()
  it('should allow you to add nodes to the first position', function() {
    var list = new structs.DoublyLinkedList();
    list.addFirst(9);
    list.addFirst(8);
    expect( list.head.data ).to.equal(8);
    expect( list.head.next.data ).to.equal(9);
    expect( list.head.next.prev.data ).to.equal(8);
    expect( list.head.prev ).to.equal(null);
  });

  // removeFirst()
  it('should allow you to remove the first node', function() {
    var list = new structs.DoublyLinkedList();

    list.addFirst(9);
    list.addFirst(8);
    list.addFirst(7);
    var value = list.removeFirst();

    expect( list.head.data ).to.equal(8);
    expect( value ).to.equal(7);
    expect( list.head.next.prev.data ).to.equal(8);
  });
});

// Binary Search Tree
describe('User should be able to create a binary search tree from a sorted ' +
  'array and called its methods', function() {
  it('should create an empty binary search tree', function() {
    var list = new structs.BinarySearchTree();

    expect( list ).to.be.ok;
    expect( list.root ).to.equal(null);
  });

  // arrayToBST
  it('should accept a sorted array and turn it into a bst', function() {
    var list = new structs.BinarySearchTree();
    list.arrayToBST( [ 1,2,3,4 ] );
    var tree = list.root;

    expect( tree.root ).to.equal(3);
    expect( tree.left.root ).to.equal(2);
    expect( tree.right.root ).to.equal(4);
    expect( tree.right.left ).to.equal(null);
    expect( tree.left.right ).to.equal(null);
    expect( tree.left.left.root ).to.equal(1);
  });

  it('should be able to return an array of all value between a min and max', function() {
    var list = new structs.BinarySearchTree();
    list.arrayToBST([1,5,6,22,34,46,48,51,63,69,72,83,95]);
    var result = list.rangeSearch( 7, 64 );

    expect( result.join() ).to.equal('22,34,46,48,51,63');
  });
});







