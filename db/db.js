const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mongoisbetter',
  database: 'fecimage'
});

connection.connect();

const addToDB = (values, callback) => {
  connection.query(`INSERT IGNORE INTO inventory (id, links, sku) VALUES (${values.id}, '${values.links}', '${values.sku}')`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getFromDB = (sku, callback) => {
  connection.query(`SELECT * FROM inventory WHERE sku='${sku}'`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = { addToDB, getFromDB };
