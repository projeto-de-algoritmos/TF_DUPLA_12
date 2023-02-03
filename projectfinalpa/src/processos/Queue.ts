export default class Queue {
    queue: Array<any>;
    constructor() {
      this.queue = [];
    }
  
    get length() {
      return this.queue.length;
    }
  
    enqueue(item: any) {
      this.queue.push(item);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[0];
    }
  
    isEmpty() {
      return this.length === 0;
    }
  }