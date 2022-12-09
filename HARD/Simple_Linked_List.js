//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
    constructor(newValue) {
      this.value = newValue;
      this.next = null;
    }
  }
  
  export class List {
    constructor(arr = null) {
      this.length = 0;
      this.head = null;
      if (arr) {
        arr.forEach((elementValue) => {
          const elementToAdd = new Element(elementValue);
          this.add(elementToAdd);
        });
      }
    }
  
    add(newElement) {
      const newHead = newElement;
      newHead.next = this.head;
      this.head = newHead;
      this.length += 1;
    }
    
  
    toArray() {
      const arr = [];
      if (this.length === 1) {
        arr.push(this.head.value)
        return arr;
      }
      while (this.head !== null) {
        arr.push(this.head.value)
        this.head = this.head.next;
      }
      return arr;
    }
    reverse() {
      let prevElemt = null;
      let current = this.head;
      let next = null;
      while (current != null) {
        next = current.next;
        current.next = prevElemt;
        prevElemt = current;
        current = next;
      }
      this.head = prevElemt;
      return this;
    }
  }