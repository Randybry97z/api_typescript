export class SortingAlgorithms<T>{
  constructor() { }

  //The swap function is for quickSort algorithm
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

  //merge used for the mergeSort algorithm
  merge(left: number[] | undefined, right: number[] | undefined) {
    let resultArray: number[] = [], leftIndex: number = 0, rightIndex: number = 0;
    if (left && right) {
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++
        }
      }
      return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    } else {
      throw Error("The array is empty!")
    }
  }

  mergeSort(arr: number[]): number[] | undefined {
    if (arr.length <= 1)
      return arr
    let middle = Math.floor(arr.length / 2);
    let left: number[] = arr.slice(0, middle), right: number[] = arr.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  bubbleSort(arr: number[]) {
    let swapped: boolean;

    do {
      swapped = false;
      arr.forEach((item, index) => {
        if (item > arr[index + 1]) {
          let temp = item;
          arr[index] = arr[index + 1];
          arr[index + 1] = item;
          swapped = true
        }
      })
    } while (swapped);
    return arr;
  }
}