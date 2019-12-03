const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mongoisbetter',
  database: 'fecimage'
});

connection.connect();

const addToDB = (values, callback) => {
  connection.query(
    `INSERT IGNORE INTO inventory (id, name, price, links, sku, model, stock) VALUES (${values.id}, '${values.name}', ${values.price}, '${values.links}', '${values.sku}', ${values.model}, ${values.stock})`,
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};

module.exports = { addToDB };
