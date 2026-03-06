const bcrypt = require("bcrypt.js");
const jwt = require("jsonwebtoken");
const db = require("../config/database");
const verifyToken  = require("../middleware/auth")

const router = express.Router();

/* {
   	"empname": "Rohan",
	"email": "Rohan@gmail.com",
	"password": "Rohan123",
} */

router.post("/create", async (req, res) => {
	const { empname, email, password } = req.body;

	const hashpwd = await bcrypt.hash(password, 10);

	const query = 'insert into emps (name, email, password) value (?, ?, ?)';

	db.query(query, [empname, email, hashpwd], (err, result) => {
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
		// sass.aada.xxsax aka header.payload

		res.json({token});
	})
})

// Authorization: Bearer TOKEN

router.get("/profile", verifyToken, (req, res) => {
	res.json({ message:"protected data", emp:req.emp })
})

module.exports = router;