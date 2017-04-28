const Router = require('express').Router;
const router = Router();
const path = require('path');
const marked = require('marked');
const fs = require('fs');

router.get('/', (req, res, next) => {
  const pathToReadme = __dirname + '/../README.md';

  fs.readFile(pathToReadme, 'utf8', (err, data) => {
    if (err) return next(err);

    res.send(marked(data.toString()));
  });
});

router.get('/random', (req, res) => {
  res.json({ title: 'random movie'});
});

router.get('/choose', (req, res) => {
  res.json(
    {
      length: 3,
      data: [
        { title: 'movie-1'},
        { title: 'movie-2'},
        { title: 'movie-3'}
      ]
    }
  );
});

module.exports = router;
