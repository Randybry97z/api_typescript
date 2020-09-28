import { Router, Response, Request, NextFunction } from 'express'
import { Stack } from '../classes/Stack';

const router = Router()

router.route('/')
  .get((req: Request, res: Response, next: NextFunction) => {
    let stack = new Stack(2);
    stack.push(2);
    stack.push(3);
    res.json({
      "message": "Stack created!",
      "size": stack.size(),
      "stack": stack.show()
    });
  })

export default router;