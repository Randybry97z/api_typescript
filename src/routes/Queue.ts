import { Router, Request, Response, NextFunction } from 'express'
import { Queue } from '../classes/Queue';

const router = Router()

router.route('/').get(
  (req: Request, res: Response, next: NextFunction) => {
    let queue = new Queue(2);
    queue.enqueue("A");
    queue.enqueue("B");
    res.json({
      "message": "Queue created",
      "size": queue.size(),
      "elements": queue.print()
    });
  }
)

export default router;