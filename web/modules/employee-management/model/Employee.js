const schema 		= require("./schema").Employee;
const validator = require.main.require("./lib/oval")("Employee", schema);

const register = function(req, res) {
	// console.log(`register new employee`);
	if(validator.validate(req.body)) {
		console.log(validator.data())
		res.send(`registration successful!`);
	}
	else {
		res.send(`registration failed`);
	}
}


exports.register = register;