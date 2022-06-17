const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('First server on express');
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
