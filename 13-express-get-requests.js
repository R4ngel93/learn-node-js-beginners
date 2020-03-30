const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from express');
});

app.get('/example', (req, res) => {
  res.send('Hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
  console.log(req.params);
  res.send(`${req.params.name} : ${req.params.age}`);
});

app.listen(3000);
