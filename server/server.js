const express = require('express');
const db = require('../db/db.js');
const inventory = require('./inventory.js');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/add', (req, res) => {
  inventory.forEach(item => {
    db.addToDB({ id: item.id, links: JSON.stringify(item.links), sku: item.sku }, (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(result);
      }
    });
  });
  res.send();
});

app.get('/images', (req, res) => {
  const id = req.query.id;
  db.getFromDB(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(4015, () => console.log('Server running on port 4015'));
