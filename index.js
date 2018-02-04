// 3rd party libs
const express = require('express');
const bodyParser = require('body-parser');

// My functions
const {
  getSomeData,
  insertOrUpdateSingle,
  getAllData
} = require('./src/query.js');

// My application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log('body:', req.body)
  console.log('query:', req.query)
  if (req.body = {}) {
    getAllData()
      .then(passedData => res.send(passedData))
      .catch(new Error('Some kind of error message.'));
  } else {
    getSomeData()
      .then(passedData => res.send(passedData))
      .catch(new Error('Some kind of error message.'));
  }
})

app.post('/', (req, res) => {
  insertOrUpdateSingle(req.body)
    .then(passed_data => res.send(passed_data))
    .catch(new Error('Some kind of error message.'));
})

app.listen('3000');
