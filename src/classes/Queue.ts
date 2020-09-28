import { IQueue } from '../interfaces/IQueue';
export class Queue<T> implements IQueue<T> {
  private collection: T[] = [];

  constructor(private capacity: number = Infinity) { }

  print() {
    return this.collection;
  }

  enqueue(element: T): void {
    if (this.size() === this.capacity) {
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

  isEmpty() {
    return (this.collection.length === 0)
  }
};