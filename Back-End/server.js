const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

const inventory = [];

// POST Endpoint for Adding Grocery Items
app.post('/add-item', (req, res) => {
  const newItem = req.body;
  inventory.push(newItem);
  res.status(201).json({ message: 'Item added successfully' });
});

// GET Endpoint for Retrieving All Items
app.get('/inventory-items', (req, res) => {
  res.status(200).json(inventory);
});

// Endpoint for Deleting All Items
app.delete('/clear-items', (req, res) => {
  // Clear the 'inventory' array of items
  inventory.length = 0
  res.status(204).send(); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

