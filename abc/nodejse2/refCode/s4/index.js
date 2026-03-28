const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.get('/hello', (req, res) => {
  res.render('index', { name: 'Rohan' });
});

app.get('/emps', (req, res) => {
  const emps = ['rohan', 'mayur', 'prashant'];
  res.render('emps', { emps });
});

app.listen(3000);
