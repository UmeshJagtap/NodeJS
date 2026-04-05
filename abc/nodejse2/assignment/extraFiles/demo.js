//
// Sample Server
//

// npm install express

import express from 'express';
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('server running');
});

// Running above app
// $ node demo.js
// http://localhost:3000/hello
// Hello world
