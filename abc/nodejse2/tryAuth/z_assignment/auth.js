//
// npm init -y
// npm install express mysql2 jsonwebtoken bcryptjs dotenv --save
//

// .env 
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password1
DB_NAME=test
JWT_SECRET=rohan

// Extra secrects
APP_PORT=3000
APP_URL=http://localhost:8000
CLIENT_URL=http://localhost:3000
JWT_SECRET=
JWT_EXPIRATION=24h

// config > database.js
const mysql = reuire("mysql2");

const db = mysql.createConnection({
	host: process.env.DB_HOST
	user: process.env.DB_USER
	password: process.env.DB_PASSWORD
	database: process.env.DB_NAME
});

db.connect((err) => {
	if(err) 
	{
		console.log('database connection failed');
	} else {
		console.log('database connected successfully');
	}
})

module.exports = db;

// index.js
const express = require('express');
require('dotenv').config();

const app = express();
const empRoutes = require('/routes/empRoutes');

app.use(express.json());

app.use('api/emps', empRoutes);

app.listen(process.env.PORT, () => {
	console.log('server connected');
});

// middleware > auth.js
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const token = req.headers['authorization'];

	if(!token){
		return res.status(401).json({message:"no token"})
	}
}

try {
		const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
		req.emp = decoded;
		next();
} catch(err) {
		return res.status(401).json({message:"invalid token"})
}

module.exports = verifyToken;

// routes > empRoutes.js
const bcrypt = require("bcrypt.js");
const jwt = require("jsonwebtoken");
const db = require("../config/database");
const verifyToken = require("../middleware/auth")

const router = express.Router();

/* {
   	"empname": "Rohan",
		"email": "Rohan@gmail.com",
		"password": "Rohan123",
} */

router.post("/create", async (req, res) => {
	const { empname, email, password } = req.body;

	const hashpwd = await bcrypt.hash(password, 10);

	const query = 'insert into emps (name, email, password) values (?, ?, ?)';

	db.query(query, [empname, email, hashpwd)], (err, result) => {
		if(err) return res.status(500).json(err);
		res.json({ message: "emp created"});
	});
});

router.post("/login", (req, res) => {
	const { email, password } = req.body;

	db.query("select * from emps where email = ?", [email], async (err, result) => {
	 	if(err) return res.status(500).json(err);

		if (result.length === 0) {
			return res.status(400).json({ message: "emp not found"})
		}
		const emp = result[0];

		const match = await bcrypt.compare(password, emp.password);

		if (!match) {
			return res.status(400).json({message: 'invalid credentials'})

		const token = jwt.sign(
			{id: emp.id, email: emp},
			process.env.JWT_SECRET,
			{expiresIn: "30"}
		);
		// jwt Token >> asass.aada.xxsax  aka  header.payload.signature

		res.json({token})
	})
})

// Authorization: Bearer TOKEN

router.get("/profile", verifyToken, (req, res) => {
	res.json({ message:"protected data", emp:req.emp })
})

module.exports = router;

// QnA
mysql part
	connection pool 
	async await
	validation --express validator

mvc pattern

jwt
refresh token
role based authorization

express session --can also be used for secure api
oauth 2.0 -- login with Google / Git
passport-google-oauth20 --Google authentication

// Registration flow
// User > API > hashpassword > stored in database

// Login Flow
user > verify or check email > compare pwd > generate jwt token > send token

// Protected Route Flow
// client > send token > middleware  verifyToken > allow access 

// http:localhost:3000/api/emps/create
// http:localhost:3000/api/emps/login