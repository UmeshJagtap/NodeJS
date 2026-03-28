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

// ▶ It is easy to learn because many front-end users are familier with JavaScript, so they don't have to learn a new language in order to learn Express.js
// ▶ For requesting handling, we can use middleware.
// ▶ A single language is used for frontend and backend development.
// ▶ Express is fast to link it waith databases like MySQL, MongoDB, etc
// ▶ Express allows dynamic rendering of HTML Pages based on passing arguments to templates.
// ▶ The Express.js framework is very simple to customize and use as per the needs
// ▶ As we know that express provides middleware, mainly useful for doing extra tasks on response and request.

// 16.14

//
// Limitations of Express.js  --------------------
//

// > Sometimes, there is no structural way to organize things, and the code becomes non-understandable.
// > Sometimes there are so many issues with callbacks if code becomes messy and lengthy.
// > The error messages that will come are challenging to understand.
// > Companies are Using Express JS
//    Netflix
//    IBM
//    eBay
//    Uber

// ---------------------------------------------------------------------

//
// middleware
//

// app.use(express.json());

// client req
// server res

// nmp install express

//
// Installing Express.js  --------------------
//

// • Express gets installed via the Node Package Manager.
//   This can be done by executing the following line in the command line:
// • npm install express
// • Our application is going to create a simple server module
//   This will listen on port number 3000.
//   In our example, if a request is made through the browser on this port number,
//     then the server application will send a “Hello World” response to the client.

// var express = require('express');
// var app = express();
// app.get('/', function(req, res, next) {
//   res.send('Hello World!');
//   next();
// });
// app.listen(3000, function() {});

//-----------------------------------
// app.get('/user/:id', (req, res) => {
//   const userid = req.params.userid;
// });

//----------------------------------
// const express = require('express');
// const router = express.Router();

// routes
//     userRoute.js
//     authRoute.js

//
// Application Logic  --------------------
//

// > There is only one place where you can put your business logic is controllers.

// > Route: direct the API call to the right controller function.

// > Controllers: receive the API calls with the req. data, do some validation in the context of the API call (HTTP related, for example: API auth and so on).

// Services: the controller then calls a service that contains the business logic.
// The idea is the service (business logic) is not tied to a controller and to the req. data.
// The service receives the data it needs (from the extracted from the req. and maybe other things) and returns other data that can be used by the controller for the res. data.

// business logic .. aka controllers

// Model --database Interface
// View --
// Controller --handles the HTTP request and returns

// controllers > logic before saving to db, check permission
// db > connection of the database
// models > alll the stuff who touch a models himself, the schema etc

// services > stripe, aws s3 etc

//
// MVC Architecture  --------------------
//

// > Model
// Model is the database interface which lets you interact with the database API and create different entity schemas of your app on the database (MySQL, MongoDB).
// It gets called from the controller depending on the client’s request—if it needs stored data, then the controller will ask the model interface for providing it with the needed data.

// > View
// View is what compiles and renders into plain HTML and what the client in most cases is going to get back as a response of what was requested (for example: to view profile details).
// The view needs to use a Template Engine for doing the rendering process where:
// The controller feeds it with needed data (from database and client).
// The view renders and converts everything into plain HTML that the browser can understand and display.

// > Controller
// Controller is the part that takes care of client request processing, which handles the HTTP request and returns a response.
// The response could be either:
// A JSON (if you’re calling an API endpoint), or
// A regular HTML webpage.

// Summary

// * Model is data part.
// * View is User Interface part.
// * Controller is request-response handler

//            ( View )
//            /       \\
//  Displays /         \\  Renders
//          /           \\   & Send Requests
// ( Model )  <---   ( Controller )
//         Manipulate

//
// Basic Folder Structure of Express JS  --------------------
//

// firstproject/
// |__node_modules
// |__public
// |__routes
// |__views
// |__package-lock.json
// |__package.json

// firstproject/
// |__bin/
// |__controllers/ | |__test-controllers.js
// |__models/      | |__test-models.js
// |__node_modules/
// |__public/
// |__routes/      | |__test-route.js
// |__views/       | |__test-operation.ejs
// |__package-lock.json
// |__package.json

//
// MVC Structure of Express JS  --------------------
//

// > controllers → logic before saving to the db, check permission, etc.
// > db → Connection of the database.
// > models → all the stuff who touch a model itself, the schema etc.
// > config → config about the db, connection to the db etc.
// > helpers → helpers function like sum, total, pluralize, etc.
// > Migrations → all the migrations files of the db.
// > routes → all the rest API routes, where they take a controller as callback.
// > services → stripe, aws s3 etc.
// > package.json → all your dependencies.
// > index.js → where everything starts, your server instance etc.

// Migration

// Employees
//   migrations
//     20260213_create_employee.js
//     20260213_create_employee_mobilenumbers.js
