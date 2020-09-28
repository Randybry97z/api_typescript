export interface IQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | undefined;
  size(): number;
}