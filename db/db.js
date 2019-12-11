const connection = require('./connection.js');

const addToDB = (values, callback) => {
  connection.query(`INSERT IGNORE INTO inventory (id, links, sku) VALUES (${values.id}, '${values.links}', '${values.sku}')`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getFromDB = (id, callback) => {
  connection.query(`SELECT * FROM inventory WHERE id='${id}'`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = { addToDB, getFromDB };
