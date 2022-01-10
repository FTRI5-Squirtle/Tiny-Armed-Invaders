const db = require('../models/dbModel.js');
const bcrypt = require("bcrypt");
const userController = {};

// POST request to /user/login
userController.loginUser = (req, res, next) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return next({
        log: 'userController.loginUser error: Username or password was not provided.',
        status: 400,
        message: { err: 'Failed to log in. Username or password not provided.' },
      });
    }
  
    const userQuery = `SELECT * FROM users WHERE username = '${username}'`;
    db.query(userQuery)
      .then((foundUser) => {
        if (!foundUser.rows.length) {
          return next({
            log: 'userController.loginUser: Username not found in database.',
            status: 400,
            message: {
              err: 'userController.loginUser: Username not found in database.',
            },
          });
        }
  
        if (foundUser.rows[0].password === password) {
          res.locals.user_id = foundUser.rows[0].uuid;
          return next();
        } else {
          return next({
            log: 'userController.loginUser: Password does not match.',
            status: 400,
            message: {
              err: 'userController.loginUser: Password does not match.',
            },
          });
        }
      })
  
      .catch((err) => {
        return next({
          log: 'userController.loginUser: Error in querying the database.',
          status: 500,
          message: {
            err: `userController.loginUser: Error in querying the database: ${err}`,
          },
        });
      });
  };
  
  // POST request to sign up page
  userController.registerUser = (req, res, next) => {
    // Extract username, password, and optional name from req.body
    const { username, password, email } = req.body;
  
    if (!username || !password) {
      return next({
        log: 'userController.registerUser: Username or password not provided.',
        status: 400,
        message: {
          err: 'userController.registerUser: Username or password not provided.',
        },
      });
    }
  
  
    const hashedPassword = bcrypt.hash(password, 10);
    const queryString = `INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING uuid`;
  
    // Values array
    const values = [username, email, hashedPassword];
  
    // Database query
    db.query(queryString, values)
      .then((newUser) => {
        res.locals.user_id = newUser.rows[0].uuid;
        console.log(res.locals.user_id);
        return next();
      })
      .catch((err) => {
        return next({
          log: `userController.registerUser error: ${err}`,
          status: 500,
          message: { err: 'Failed to register user.' },
        });
      });
  };

module.exports = userController;