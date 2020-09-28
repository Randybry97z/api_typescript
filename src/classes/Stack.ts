import { Collection } from './Collection';
import { IStack } from 'src/interfaces/IStack';

export class StackCollection<T> extends Collection<T> implements IStack<T>{

  constructor(private capacity: number = Infinity) {
    super();
  }

  push(element: T) {
    if (this.isFull()) {
      throw Error("Ups! The stack is full");
    }
    return this.storage.push(element);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  show() {
    return this.storage
  }

  isFull(): boolean {
    return this.capacity == this.size();
  }
}