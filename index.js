// 3rd party libs
const express = require('express');
const bodyParser = require('body-parser');

// My functions
const { getSomeData, insertOrUpdate } = require('./src/query.js');

// My application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
  getSomeData()
    .then(res.send(stuff))
    .catch(new Error('Some kind of error message.'));
})

app.post('/', (req, res) => {
  insertOrUpdate()
    .then(res.send(stuff))
    .catch(new Error('Some kind of error message.'));
})

app.listen('3000');
