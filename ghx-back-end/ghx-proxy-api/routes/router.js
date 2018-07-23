const express = require('express');
const router = express.Router();
const api = require('../data-api/data-api');

/* GET users. */
router.get('/api/users', (req, res) => {

  const sinceParam = req.query['since'];

  api.getUsers(sinceParam).then(data => {
    res.json(data);
  })
});

/* GET a given user's details */
router.get('/api/users/:username/details', (req, res, next) => {

  const username = req.params['username'];

  api.getUserDetails(username).then(data => {
    res.json(data);
  })
})

/* GET a given user's repositories */
router.get('/api/users/:username/repos', (req, res, next) => {

  const username = req.params['username'];

  api.getUserRepos(username).then(data => {
    res.json(data);
  })
})

module.exports = router;
