import { Router } from 'express'
import { SortingAlgorithms } from '../classes/SortingAlgorithms'

const router = Router()

router.route('/quicksort/')
  .get((req, res, next) => {
    let quickSort = new SortingAlgorithms();
    let arr = [1, 2, 9, 4, 5, 100, 500, 1100, 800, 0];
    let arr_start = `[${arr}]`;
    let result = quickSort.quickSort(arr);

    res.json({
      "message": "This is the quicksort algorithm",
      "array_passed": arr_start,
      "result_sort": result
    })
  })

export default router;