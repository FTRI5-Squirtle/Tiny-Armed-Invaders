const db = require('../models/dbModel.js');
const scoreController = {};

// POST request to /user/login
scoreController.postScore = (req, res, next) => {
  const { username, score } = req.body;

  if (!username) {
    return next({
      log: 'scoreController.postScore error: Page does not have access to username.',
      status: 400,
      message: { err: 'Failed to post score. Username not provided.' },
    });
  }

  const queryString = `INSERT INTO scores (username, score)
    VALUES ($1, $2)
    RETURNING score`;

  // Values array
  const values = [username, score];

  // Database query
  db.query(queryString, values)
    .then((newScore) => {
      res.locals.username = newScore.rows[0].username;
      res.locals.score = newScore.rows[0].score;
      console.log(res.locals.username);
      console.log(res.locals.score);
      return next();
    })

    .catch((err) => {
      return next({
        log: 'scoreController.postScore: Error in querying the database.',
        status: 500,
        message: {
          err: `scoreController.postScore: Error in querying the database: ${err}`,
        },
      });
    });
};
scoreController.getScores = (req, res, next) => {
  const queryString = `SELECT username, score FROM scores ORDER BY score DESC LIMIT 10`;
  // Database query
  db.query(queryString)
    .then((scoreRoster) => {
      res.locals.scoreRoster = scoreRoster.rows;
      console.log(res.locals.scoreRoster);
      return next();
    })

    .catch((err) => {
      return next({
        log: 'scoreController.getScores: Error in querying the database.',
        status: 500,
        message: {
          err: `scoreController.getScores: Error in querying the database: ${err}`,
        },
      });
    });
};
module.exports = scoreController;

//const userQuery = `SELECT * FROM scores WHERE username = '${username}'`;
/*

INSERT INTO scores (username, score) VALUES ('testusername4', 50) RETURNING score;

SELECT username, score FROM scores ORDER BY score DESC LIMIT 10;

*/
