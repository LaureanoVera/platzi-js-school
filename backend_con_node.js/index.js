const express = require('express');
const app = express();
const port = 3019 || process.env.port;

app.get('/', (req, res) => {
  res.send('Express Server');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
