const express = require('express');
const db = require('../db/db.js');
const inventory = require('./inventory.js');
const app = express();

app.use(express.static('public'));

app.get('/add', (req, res) => {
  inventory.forEach(item => {
    db.addToDB(
      { id: item.id, name: item.name, price: item.price, links: item.links, sku: item.sku, model: item.model, stock: item.stock },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  });
  res.end('Thanks');
});

app.listen(4015, () => console.log('Server running on port 4015'));
