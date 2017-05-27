const Employees = require("./model/Employee");
const path = require("path");

// expose the route configurations
module.exports = function(app) {
	
	// require helper function url prefixer
	let module_name = path.basename(__dirname);
	let url = require(`${app.get("LIB_PATH")}/prefixer`)(module_name).url;

	console.log(module_name);

	app.get(url("/"), function(req, res) {
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


	app.get(url("/register"), function(req, res) {
		let template = `
				<html>
					<body>
						<form name="register" action="${url("/register")}" method="POST">
							<input type="text" name="emp[surname]" placeholder="surname" />
							<input type="text" name="emp[middlename]" placeholder="middlename" />
							<input type="text" name="emp[lastame]" placeholder="lastname" />
							<input type="submit" value="register" />
						</form>
					</body>
				</html>
			`;
		res.send(template);
	});


	app.post(url("/register"), Employees.register);

}