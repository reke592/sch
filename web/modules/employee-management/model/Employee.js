const schema 		= require("./schema").Employee;
const validator = require.main.require("./lib/oval")("Employee", schema);
const helper = require.main.require("./lib/mongo-helper");

const db = helper("employees")

const register = function(req, res) {
	// console.log(`register new employee`);
  console.log(req.body)
  res.send(req.body)
	// if(validator.validate(req.body)) {
	// 	console.log(validator.data())
	// 	res.send(`registration successful!`);
	// }
	// else {
	// 	res.send(`registration failed`);
	// }
}


exports.register = register;