const Router = require('express').Router;
const router = Router();
const path = require('path');
const marked = require('marked');
const fs = require('fs');
const request = require('request');
const queryString = require('query-string');
const config = require('../config');

router.get('/', (req, res, next) => {
  const pathToReadme = __dirname + '/../../README.md';

  fs.readFile(pathToReadme, 'utf8', (err, data) => {
    if (err) return next(err);

    res.send(marked(data.toString()));
  });
});

router.get('/popular', (req, res) => {
  const query = {
    api_key: config.tmdbApiKey,
    language: 'en-US',
    page: 1
  };

  request.get(`https://api.themoviedb.org/3/movie/popular?${queryString.stringify(query)}`).pipe(res);
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
