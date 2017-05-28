function Employee(obj) {
	for(key in obj) {
		this[key] = obj[key];
	}
}

const register = function(req, res) {
	console.log(`register new employee`);
	console.log(req.body);
	res.send(`registration successful..`);
}


exports.Model = Employee;
exports.register = register;