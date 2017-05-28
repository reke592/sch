module.exports = function(app) {
	
	let express = require("express");
	let path = require("path");
	let Employees = require("./model/Employee");
	let router = express.Router();
	let module_name = path.basename(__dirname);
	let url = require(`${app.get("LIB_PATH")}/prefixer`)(module_name).url;

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
							<input type="text" name="surname" placeholder="surname" />
							<input type="text" name="middlename" placeholder="middlename" />
							<input type="text" name="lastame" placeholder="lastname" />
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