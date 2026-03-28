const express = require('express');
const axios = require('axios');
const app = express();

app.get(`/emp-details/:id`, async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:3002/emp/${req.params.id}`
    );

    res.json({ message: 'data getting from remote', emp: response.data });
  } catch (err) {
    res.status(500).json({ message: 'microservices example' });
  }
});

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('server host running on 3000');
});

// Running above app
// $ node micro.js
// localhost:3000/emp-details/1
// { message: "microservices example"}  --If emp not found
// { message: "data getting from remote", emp: { id: 3, name: 'rohan3' }}
