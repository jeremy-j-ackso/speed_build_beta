// 3rd party libs
const express = require('express');

// My funcctions
const query = require('./src/query.js');

// My application
const app = express();

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
