const schema = require("./schema").Employee;
const validator = require("./schema").Validator("Employee", schema);


const register = function(req, res) {
	// console.log(`register new employee`);
	console.log(validator.validate(req.body));
	res.send(`registration successful..`);
}


exports.register = register;