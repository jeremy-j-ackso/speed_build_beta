const node_db = require('nano')('http://node_user:reallysecure@localhost:5984/node_db');

function getAllData() {
  return new Promise((resolve, reject) => {
    node_db.list({ includ_docs: true }, (err, body) => {
      if (err) reject(new Error(`There was a problem getting all docs from the database.\n${err}`));
      resolve(body)
    });
  });
}

function getSomeData(id) {
  return new Promise((resolve, reject) => {
    node_db.get(id, (err, body) => {
      if (err) reject(new Error(`There was a problem querying the database.\n${err}`));
      resolve(body)
    });
  });
}

function insertOrUpdateSingle(data) {
  return new Promise((resolve, reject) => {
    node_db.insert(data, (err, body) => {
      if (err) reject(new Error(`There was a problem inserting or updating the data.\n${err}`));
      resolve(body)
    });
  });
}

module.exports = {
  getSomeData,
  insertOrUpdateSingle,
  getAllData,
};
