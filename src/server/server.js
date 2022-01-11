const path = require('path');
const express = require('express');
const { fsync } = require('fs');
const userRoutes = require('./routes/userRoutes.js');
const PORT = 3000;
const app = express();
var cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(express.static('assets'));

app.use('/users', userRoutes);




app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
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
