const node_db = require('nano')('http://node_user:reallysecure@localhost:5984/node_db');

function getSomeData(id) {
  return new Prommise((resolve, reject) => {
    node_db.get(id, (err, body) => {
      if (err) reject(new Error(`There was a problem querying the database.\n${err}`));
      resolve(body)
    });
  });
}

function insertOrUpdate(data) {
  return new Promise((resolve, reject) => {
    node_db.post(data, (err, body) => {
      if (err) reject(new Error(`There was a problem inserting or updating the data.\n${err}`));
      resolve(body)
    });
  });
}

module.exports = { getSomeData, insertOrUpdate };
