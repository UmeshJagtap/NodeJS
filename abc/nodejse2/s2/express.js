
//
// Why Express.js?  --------------------
//

// > Express was created to make APIs and web applications with ease.

// > It saves a lot of coding time—almost by half—and still makes web and mobile applications efficient.

// > Another reason for using Express is that it is written in JavaScript, and JavaScript is an easy language even for someone without previous programming experience.

// > Express enables many new developers to enter the field of web development.

// > The reasons behind creating an Express framework for Node.js include:
//   * Time‑efficient
//   * Fast
//   * Economical
//   * Easy to learn
//   * Asynchronous

//
// What is Express.js  --------------------
//

// > Express.js is a Node.js web application server framework, designed specifically for building single‑page, multi‑page, and hybrid web applications.

// > Express is widely used and can be used to develop applications such as:
// Web servers
// REST API servers
// Streaming engines
// And more

// Express has become the standard server framework for Node.js. It is the backend part of something known as the MEAN stack.

// MEAN is a free and open‑source JavaScript software stack for building dynamic websites and web applications. It includes the following components:

// 1. MongoDB – The standard NoSQL database
// 2. Express.js – The default web applications framework
// 3. Angular.js – The JavaScript MVC framework used for web applications
// 4. Node.js – The framework used for scalable server‑side and networking applications

//
// Features of Express.js  --------------------
//

// ▶ Faster Server‑Side Development - The features of Node.js help Express save a lot of development time.

// ▶ Middleware - Middleware is a request handler that has access to the application's request–response cycle.

// ▶ Routing - Refers to how an application's endpoint URLs respond to client requests.

// ▶ Templating - Provides templating engines to build dynamic content on web pages by creating HTML templates on the server.

// ▶ Debugging - Express makes debugging easier by identifying the exact location where bugs occur.


//
// Advantages of Express.js  --------------------
//

// 16.14

// ---------------------------------------------------------------------

//
// middleware
//

// app.use(express.json());

// client req
// server res

// nmp install express

app.get('/user/:id', (req, res) => {
    const userid = req.params.userid;
  });
  
  const express = require('express');
  const router = express.Router();
  
  
  business logic .. controllers
  
  Model --database Interface
  View --
  Controller --handles the HTTP request and returns 
  
  
  // folder 
  firstproject/
  |__node_modules
  |__public
  |__routes
  |__views
  |__package-lock.json
  |__package.json
  
  
  controllers > logic before saving to db, check permission
  db > connection of the database
  models > alll the stuff who touch a models himself, the schema etc
  
  services > stripe, aws s3 etc
  
  
  // Migration
  
  Employees
    migrations
      20260213_create_employee.js
      20260213_create_employee_mobilenumbers.js
  
  
  
  // Folder Structure ;-