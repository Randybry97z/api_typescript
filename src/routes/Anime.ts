import { Router, Request, Response, NextFunction } from 'express';
const fetch = require('node-fetch');

const router = Router();
const base_url = process.env.BASE_URL;

router.route('/:anime').get(async function (req: Request, res: Response, next: NextFunction) {
  let data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${req.params.anime}`)
  let anime = await data.json();
  res.json(
    {
      "message": "Welcome to the Anime API, this API is developed for Jikan.moe. If you want consume this API, go to URL",
      "URL": "https://jikan.moe",
      "anime": anime
    })
})

export default router;