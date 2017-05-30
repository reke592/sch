// set entry-point's base_dir as last-resort for require function
const path = require("path");
module.paths.push(path.parse(require.main.filename).dir)

const schema = require("./schema").Employee;
const validator = require("lib/oval")("Employee", schema);

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