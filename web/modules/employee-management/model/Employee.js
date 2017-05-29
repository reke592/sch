const schema = require("./schema").Employee;
const validator = require("./schema").Validator("Employee", schema);


const register = function(req, res) {
	// console.log(`register new employee`);
	if(validator.validate(req.body))
		res.send(`registration successful!`);
	else
		res.send(`registration failed`);
}


exports.register = register;