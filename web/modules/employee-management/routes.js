const express = require("express");
const path = require("path");
const router = express.Router();
const module_name = path.basename(__dirname);
const Employees = require("./model/Employee");

function lib(app, lib_name) {
	return require(`${app.get("LIB_PATH")}/${lib_name}`);
}

module.exports = function(app) {
	
	console.log(module_name);
	let prefix = lib(app, "prefixer")(`/${module_name}`).prefix;
	
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

	app.use(router);
};