import { Router } from 'express'

const router = Router()

router.route('/').get((req, res, next) => {
  res.json({ "message": "Pong!" })
})


export default router;