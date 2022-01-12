const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const {OauthOne, OauthTwo} = require('./controllers/authController.js');

router.get('/gitHub', (req, res) => {
  console.log('at router');
  res.redirect('https://github.com/login/oauth/authorize?response_type=code&client_id=403beed96884fcf48e82&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fgithub%2Fcallback')
});

router.get('/auth/github/callback', (req, res) => {
  res.redirect('/game')
});

// POST request to /users/login
router.post('/login', userController.loginUser, (req, res) => {
  res.status(200).json({
    username: res.locals.username,
  });
});

// POST request to /users/signup
router.post('/signup', userController.registerUser, (req, res) => {
  res.status(200).json({
    username: res.locals.username,
  });
});



module.exports = router;
