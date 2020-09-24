import { Router } from 'express';

const router = Router();

router.route('/')
  .get((req, res, next) => {
    res.json(
      {
        "message": "Welcome to the route for count the strings & know how many times it's repeated",
        "tip": "If you want to know if your string have words repeated & want to know how many times, go to the next route",
        "route": "http://localhost:3000/repeated/:phrase1_phrase2_phrasen",
        "example": "http://localhost:3000/repeated/aaaa_bbbb_aaaa"
      }
    )
  });

router.route('/:word')
  .get((req, res, next) => {
    let word = req.params.word;
    let arr = word.split('_');
    let counted = arr.reduce(function (allNames, name) {
      if (name in allNames) {
        allNames[name]++
      }
      else {
        allNames[name] = 1
      }
      return allNames
    }, {});
    res.json(
      {
        "message": `Your word is: ${word}`,
        "word_count_result": counted
      }
    )
  });


export default router;