import { Request, Response, NextFunction, Router } from 'express';

let router = Router();

router.route('/').get((req: Request, res: Response, next: NextFunction) => {
  res.json(
    {
      "message": "Hello if you want to know if one string is palindrome, set the word in the url",
      "route": "http://localhost:3000/palindrome/:word",
      "example": "http://localhost:3000/palindrome/oso"
    }
  )
})

router.route('/:word')
  .get((req: Request, res: Response, next: NextFunction) => {
    let word = req.params.word.toLowerCase();
    let swap = word.split("").reverse().join("");
    if (swap == word)
      res.json({ "message": "Is a palindrome!" })
    res.json({ "message": "Is not a palindrome :C" })
  })


export default router;