import { Router } from 'express'
import { SortingAlgorithms } from '../classes/SortingAlgorithms'

const router = Router()

router.route('/quicksort/')
  .get((req, res, next) => {
    let sort = new SortingAlgorithms();
    let arr = [1, 2, 9, 4, 5, 100, 500, 1100, 800, 0];
    let arr_start = `[${arr}]`;
    let result = sort.quickSort(arr);

    res.json({
      "message": "This is the quicksort algorithm",
      "array_passed": arr_start,
      "result_sort": result
    })
  })

router.route('/mergesort/')
  .get((req, res, next) => {
    let sort = new SortingAlgorithms();
    let arr = [1, 2, 9, 4, 5, 100, 500, 1100, 800, 0];
    let arr_start = `[${arr}]`;
    let result = sort.mergeSort(arr);

    res.json({
      "message": "This is the merge sort algorithm",
      "array_passed": arr_start,
      "result_sort": result
    })
  })

router.route('/bubblesort/')
  .get((req, res, next) => {
    let sort = new SortingAlgorithms();
    let arr = [1, 2, 9, 4, 5, 100, 500, 1100, 800, 0];
    let arr_start = `[${arr}]`;
    let result = sort.bubbleSort(arr);

    res.json({
      "message": "This is the merge sort algorithm",
      "array_passed": arr_start,
      "result_sort": result
    })
  })


export default router;