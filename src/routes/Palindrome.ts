import { Request, Response, NextFunction, Router } from 'express';

const router = Router();
const base_url = process.env.BASE_URL;

router.route('/').get((req: Request, res: Response, next: NextFunction) => {
  res.json(
    {
      "message": "Hello if you want to know if one string is palindrome, set the word in the url",
      "route": `${base_url}/palindrome/:word`,
      "example": `${base_url}/palindrome/oso`
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