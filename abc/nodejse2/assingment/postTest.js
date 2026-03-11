// const express = require('express');
import express from 'express';
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route to render the form page
app.get('/user-form', (req, res) => {
  res.render('userForm'); // Renders views/userForm.ejs
});

// Route to handle the form submission (POST request)
app.post('/create-user', (req, res) => {
  // Access form data via req.body
  const { name, email } = req.body;
  console.log(`Received submission: Name - ${name}, Email - ${email}`);
  // You can then save this data to a database or perform other actions
  res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
