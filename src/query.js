const nodeDb = require('nano')('http://node_user:reallysecure@localhost:5984/node_db');

function getAllData() {
  return new Promise((resolve, reject) => {
    nodeDb.list({ include_docs: true }, (err, body) => {
      if (err) reject(new Error(`There was a problem getting all docs from the database.\n${err}`));
      resolve(body);
    });
  });
}

function getDocById(id) {
  return new Promise((resolve, reject) => {
    nodeDb.get(id.key, { include_doc: true }, (err, body) => {
      if (err) reject(new Error(`There was a problem querying the database.\n${err}`));
      resolve(body);
    });
  });
}

function getDataByQuery(qry) {
  return new Promise((resolve, reject) => {
    nodeDb.fetch(qry, (err, body) => {
      if (err) reject(new Error(`There was a problem querying the database.\n${err}`));
      resolve(body);
    });
  });
}

function insertOrUpdateSingle(data) {
  return new Promise((resolve, reject) => {
    nodeDb.insert(data, (err, body) => {
      if (err) reject(new Error(`There was a problem inserting or updating the data.\n${err}`));
      resolve(body);
    });
  });
}

module.exports = {
  getDocById,
  insertOrUpdateSingle,
  getAllData,
  getDataByQuery,
};
