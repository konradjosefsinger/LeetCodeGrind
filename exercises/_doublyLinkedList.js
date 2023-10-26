class Node {
  // The 'Node' class represents an element in the doubly linked list, holding 'data', a reference to the 'next' node, and a reference to the 'prev' node.
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  // The 'DoublyLinkedList' class represents the doubly linked list itself, keeping track of the 'head' and 'tail' of the list.
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // The 'append' method adds a new node to the end of the list, updating the 'next' and 'prev' pointers as necessary.
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  // The 'print' method logs the contents of the list to the console.
  print() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements);
  }
  //
  insertAt(data, position) {
    const newNode = new Node(data);
    if (position === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      return;
    }
    let current = this.head;
    let count = 0;
    while (current && count < position) {
      current = current.next;
      count++;
    }
    if (!current) {
      this.append(data);
      return;
    }
    newNode.next = current;
    newNode.prev = current.prev;
    current.prev.next = newNode;
    current.prev = newNode;
  }
  //
  removeHead() {
    if (!this.head) {
      return null;
    }
    const removedData = this.head.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return removedData;
  }
  //
  removeTail() {
    if (!this.tail) {
      return null;
    }
    const removedData = this.tail.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return removedData;
  }
  // find(data)
  // -> Find the first node in the list containing the specified data.
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return current;
      current = current.next;
    }
    return null;
  }
  // size()
  // -> Return the size (number of nodes) of the linked list.
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.insertAt(5,2);
dll.removeHead();
dll.removeTail();
dll.print();
