const express = require('express');
const scoreController = require('../controllers/scoreController');
const scoreRouter = express.Router();

// POST request to /scores
scoreRouter.post('/', scoreController.postScore, (req, res) => {
  res.status(200).json({
    username: res.locals.username,
    score: res.locals.score,
  });
});

// GET request to /scores
// should get back ALL the scores
scoreRouter.get('/', scoreController.getScores, (req, res) => {
  res.status(200).json({
    scoreRoster: res.locals.scoreRoster,
  });
});

module.exports = scoreRouter;
