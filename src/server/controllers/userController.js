const db = require('../models/dbModel.js');
const bcrypt = require('bcrypt');
const userController = {};

// POST request to /user/login
userController.loginUser = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next({
      log: 'userController.loginUser error: Email or password was not provided.',
      status: 400,
      message: { err: 'Failed to log in. Email or password not provided.' },
    });
  }

  const userQuery = `SELECT * FROM users WHERE email = '${email}'`;
  db.query(userQuery)
    .then((foundUser) => {
      if (!foundUser.rows.length) {
        return next({
          log: 'userController.loginUser: email not found in database.',
          status: 400,
          message: {
            err: 'userController.loginUser: email not found in database.',
          },
        });
      }
      const storedPassword = foundUser.rows[0].password;
      if (bcrypt.compare(password, storedPassword)) {
        res.locals.username = foundUser.rows[0].username;
        return next();
      } else {
        console.log(
          'password:',
          typeof password,
          'length:',
          password.length,
          password
        );
        console.log(
          'foundUser.rows[0].password:',
          typeof foundUser.rows[0].password,
          'length:',
          foundUser.rows[0].password.length,

          foundUser.rows[0].password
        );
        console.log(password === foundUser.rows[0].password);
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

  if (!username || !password || !email) {
    return next({
      log: 'userController.registerUser: Username or password or email not provided.',
      status: 400,
      message: {
        err: 'userController.registerUser: Username or password or email not provided.',
      },
    });
  }

  const hashedPassword = bcrypt.hash(password, 10);
  const queryString = `INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING username`;

  // Values array
  const values = [username, email, hashedPassword];

  // Database query
  db.query(queryString, values)
    .then((newUser) => {
      res.locals.username = newUser.rows[0].username;
      console.log(res.locals.username);
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

/*
uuid serial PRIMARY KEY,
username varchar (55) UNIQUE NOT NULL,

CREATE TABLE users(
username varchar (55) NOT NULL PRIMARY KEY,
email varchar (55) UNIQUE NOT NULL,
password varchar (55) NOT NULL
);


INSERT INTO users VALUES (1, 'test@test.com', 'testusername', 'testpassword');


INSERT INTO users (email, username, password)
VALUES ('test2@test.com', 'testusername2', 'testpassword2');

DROP TABLE users;





CREATE TABLE scores(
sid serial PRIMARY KEY,
username varchar,
FOREIGN KEY(username) REFERENCES users(username),
score INT NOT NULL
);

INSERT INTO scores (username, score) VALUES ('testusername2', 1250);


https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/

https://www.postgresqltutorial.com/postgresql-foreign-key/

https://www.w3schools.com/sql/sql_foreignkey.asp

https://www.w3schools.com/sql/sql_insert.asp
*/
