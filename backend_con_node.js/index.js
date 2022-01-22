const express = require('express');
const app = express();
const port = 3019 || process.env.port;

app.get('/', (req, res) => {
  res.send('Express Server');
});

app.get('/dev', (req, res) => {
  res.json({
    name: 'Laureano Vera',
    contact: 'https://www.linkedin.com/in/laureano-vera-320086204/',
    age: 19,
    type: 'warrior',
  });
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
