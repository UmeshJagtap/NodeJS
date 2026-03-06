const express = require('express');
const app = express();

const emps = [
  { id: 1, name: 'rohan' },
  { id: 2, name: 'rohan2' },
  { id: 3, name: 'rohan3' },
];

// console.log('emps', emps);

app.get('/emp/:id', (req, res) => {
  const emp = emps.find((e) => e.id == req.params.id);
  // console.log('testid : ', req.params.id);
  // console.log('emp : ', emp);
  // console.log('testid : ', typeof req.params.id); // string

  if (!emp) {
    return res.status(404).json({ message: 'emp not found' });
  }

  res.json(emp);
});

app.listen(3002, () => {
  console.log('server running on 3002');
});

// Running above app
// $ node index.js
// http://localhost:3000/emp-details/3
// {
//   "id": 3,
//   "name": "rohan3"
// }
