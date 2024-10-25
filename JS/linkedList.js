class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//! WITHOUT TAİL //
/* class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //O(1)
  prepend(value) {
    const node = new Node(value);
    this.isEmpty() ? (this.head = node) : (node.next = this.head);
    this.head = node;
    this.size++;
  }
  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.getSize()) {
      return;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      let temp = this.head;
      const node = new Node(value);
      while (index !== 1) {
        temp = temp.next;
        index--;
      }
      node.next = temp.next;
      temp.next = node;
    }
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let temp = this.head;
      while (index !== 1) {
        temp = temp.next;
        index--;
      }
      removedNode = temp.next;
      temp.next = removedNode.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      console.log("There is no element here to delete !!");
      return null;
    }
    let removedNode;
    let temp = this.head;
    if (value === this.head.value) {
      removedNode = this.head;
      this.head = this.head.next;
      this.size--;
    } else {
      while (temp.next && value !== temp.next.value) {
        temp = temp.next;
      }
      if (temp.next) {
        removedNode = temp.next;
        temp.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
    return removedNode.value;
  }
  search(value) {
    if (this.isEmpty()) {
      console.log("List is empty !");
      return -1;
    }
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (curr.value === value) {
        return count;
      }
      curr = curr.next;
      count++;
    }
    return -1;
  }
  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let temp = this.head;
      let listValues = "";
      while (temp) {
        listValues += `${temp.value} `;
        temp = temp.next;
      }
      console.log(listValues);
    }
  }
} */
//! WİTH TAİL

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let temp = this.head;
      let listValues = "";
      while (temp) {
        listValues += `${temp.value} `;
        temp = temp.next;
      }
      console.log(listValues);
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFrontEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      while (temp.next !== this.tail) {
        temp = temp.next;
      }
      this.tail = temp;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }
}

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.size;
  }
  print() {
    return this.list.print();
  }
}

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  print() {
    return this.list.print();
  }
}
const stack = new LinkedListStack();
const queue = new LinkedListQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
queue.print();
console.log(queue.dequeue());
queue.print();
