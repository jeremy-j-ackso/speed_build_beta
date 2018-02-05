// 3rd party libs
const express = require('express');
const bodyParser = require('body-parser');

// My functions
const {
  getDocById,
  insertOrUpdateSingle,
  getAllData,
  getDataByQuery,
} = require('./src/query.js');

// My application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    getAllData()
      .then(passedData => res.send(passedData))
      .catch(new Error('Some kind of error message.'));
  } else if (req.query.key || req.query._id) {
    getDocById(req.query)
      .then(passedData => res.send(passedData))
      .catch(new Error('Some kind of error message.'));
  } else {
    getDataByQuery(req.query)
      .then(passedData => res.send(passedData))
      .catch(new Error('Some kind of error message.'));
  }
});

app.post('/', (req, res) => {
  insertOrUpdateSingle(req.body)
    .then(passedData => res.send(passedData))
    .catch(new Error('Some kind of error message.'));
});

app.listen('3000');
