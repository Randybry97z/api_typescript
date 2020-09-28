import { IQueue } from '../interfaces/IQueue';
import { Collection } from './Collection';
export class Queue<T> extends Collection<T> implements IQueue<T> {
  private collection: T[] = [];

  constructor(private capacity: number = Infinity) {
    super();
  }

  print() {
    return this.collection;
  }

  enqueue(element: T): void {
    if (this.isFull()) {
      throw Error("Ups! The Queue is full");
    }
    this.collection.push(element)
  }

  dequeue(): T | undefined {
    return this.collection.shift();
  }

  front() {
    return this.collection[0]
  }

  size(): number {
    return this.collection.length
  }

  isFull(): boolean {
    return this.capacity == this.size()
  }
};