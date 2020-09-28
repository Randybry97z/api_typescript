export class SortingAlgorithms<T>{
  private elements: number[] = [];

  constructor() { }

  swap(arr: number[], left: number, right: number) {
    let swap = arr[left];
    arr[left] = arr[right];
    arr[right] = swap;
  }

  quickSort(arr: number[], low = 0, high = arr.length - 1) {
    let index = low;
    let left = low;
    let right = high;

    if (arr.length <= 1)
      return arr

    while (left < right) {
      if (arr[right] < arr[index]) {
        this.swap(arr, index, right);
        index = right;
      } else if (arr[left] > arr[index]) {
        this.swap(arr, index, left);
        index = left;
      }
      if (right > index) {
        right--;
      } else if (left < index) {
        left++;
      }
    }
    if (low < high) {
      this.quickSort(arr, low, index - 1);
      this.quickSort(arr, index + 1, high);
    }
    return arr;

  }
}