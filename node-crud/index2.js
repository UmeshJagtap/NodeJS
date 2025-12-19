// -------------------------------------

// CONVERTING Product API --- to --- Feedback API

// console.log('Hello there');

// -------------------------------------

const express = require('express');
const mongoose = require('mongoose');
const Feedback = require('./models/feedbackMail.model.js');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;
const mongodb_url = process.env.MONGODB_URL;

app.use(express.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*'); //LINE 5

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  //ALLOW MULTIPLE ORIGINS
  const allowedOrigins = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://127.0.0.1:5000',
    'http://localhost:5000',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/api/feedbacks', async (req, res) => {
  // console.log('Hello from Node API');
  // res.send('<h1>Hello from Node API Server Updated !</h1>');
  // res.send('<h1>Products :-</h1>');
  try {
    const feedbacks = await Feedback.find({});
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// app.get('/api/product/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.post('/api/feedback', async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);
  res.send(req.body);
}); // Server stops after this operation !!!!

// // update a product
// app.put('/api/product/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// delete a product
app.delete('/api/feedback/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await Feedback.findByIdAndDelete(id);

    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }

    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(mongodb_url)
  .then(() => {
    console.log('Connected to database!');
    app.listen(port, () => {
      console.log('Server is up and running on port ' + port);
    });
  })
  .catch(() => {
    console.log('Connection Failed!');
  });

// .
// .
// .
// .
// .
// .

// To get feedbacks >> http://localhost:3000/api/feedbacks
