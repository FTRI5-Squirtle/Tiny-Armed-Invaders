const path = require('path');
const express = require('express');
const { fsync } = require('fs');
const userRoutes = require('./routes/userRoutes.js');
const PORT = 3000;
const app = express();
var cors = require('cors');

const db = require('./models/dbModel.js');
const GITLAB_APP_SECRET = require('../../.env'); //check to update hard coded secre
var ClientOAuth2 = require('client-oauth2')
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());



app.use(express.static('assets'));

app.use('/users', userRoutes);



// var githubAuth = new ClientOAuth2({
//   clientId: '403beed96884fcf48e82',
//   clientSecret: 'c8cf2ee76bcef0bf4e42b491f86c44b0005121d5',
//   accessTokenUri: 'https://github.com/login/oauth/access_token',
//   authorizationUri: 'https://localhost:8080/login/oauth/authorize',
//   redirectUri: 'http://localhost:8080/auth/github/callback',
//   scopes: ['read_user']
// })

app.use(express.static(path.join(__dirname, '../' )))


app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/game', (req, res) => {
  res.status(200).setHeader('Content-Type', 'text/html').sendFile(path.resolve(__dirname, '../game.html'));
});




//global error handler
app.use('/', (err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'Internal Server Error' },
  };
  const errorObject = Object.assign({}, defaultError, err);
  console.log(errorObject.log);
  return res.status(errorObject.status).json(errorObject.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
