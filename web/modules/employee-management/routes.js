module.exports = function(app) {
	
	const express = require("express");
	const path = require("path");
	const router = express.Router();
	const module_name = path.basename(__dirname);
	const url = require(`${app.get("LIB_PATH")}/prefixer`)(module_name).url;
	
	const Employees = require("./model/Employee");

	console.log(module_name);
	router.get(url("/"), function(req, res) {
		console.log("rendering...");
		let template = `
				<html>
					<body>
						<h3>Employee Management Home</h3>
						<a href="${url("/register")}">Add New</a>
					</body>
				</html>
			`;
		res.send(template);
	});

	router.get(url("/register"), function(req, res) {
		let template = `
				<html>
					<body>
						<form name="register" action="${url("/register")}" method="POST">
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

	router.post(url("/register"), Employees.register);

	app.use(router);
};