import { IStack } from 'src/interfaces/IStack';

export class Stack<T> implements IStack<T>{
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) { }

  push(element: T) {
    if (this.size() === this.capacity) {
      throw Error("Ups! The stack is full");
    }
    return this.storage.push(element);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.size() - 1];
  }

  show() {
    return this.storage
  }

  size() {
    return this.storage.length;
  }
}