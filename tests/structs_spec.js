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
});

