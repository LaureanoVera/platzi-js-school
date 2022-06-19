const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('First server on express');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'meat',
      price: 900,
    },
    {
      name: 'rice',
      price: 80,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    name: 'product',
    price: 999999,
    id,
  });
});

app.get('/categories/:category/products/:id', (req, res) => {
  const { category, id } = req.params;

  res.json({
    category,
    id,
  });
});

app.get('/new-route', (req, res) => {
  res.json({
    name: 'route-0111',
    type: 'unknown',
    desc: 'bip bup',
  });
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
