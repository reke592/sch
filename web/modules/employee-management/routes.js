const path 			= require("path");
const express 	= require("express");
const router 		= express.Router();
const Employees = require("./model/Employee");
const prefix 		= require.main.require("./lib/prefixer")(`/${path.basename(__dirname)}`).prefix;
const validator = require.main.require("./lib/oval")

router.get(prefix("/"), function(req, res) {
	console.log("rendering...");
	let template = `
			<html>
				<body>
					<h3>Employee Management Home</h3>
					<a href="${prefix("/register")}">Add New</a>
				</body>
			</html>
		`;
	res.send(template);
});


router.get(prefix("/register"), function(req, res) {
	let template = `
			<html>
				<body>
					<form name="register" action="${prefix("/register")}" method="POST">
						<input type="text" name="lastname" placeholder="lastname" />
						<input type="text" name="firstname" placeholder="firstname" />
						<input type="text" name="middlename" placeholder="middlename" />
						<input type="submit" value="register" />
					</form>
				</body>
			</html>
		`;
	res.send(template);
});

router.post(prefix("/register"), Employees.register);

module.exports = router;