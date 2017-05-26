module.exports = function(app) {
	console.log("employee-management");

	app.get("/emp", function(req, res) {
		res.end("Employee Management Home");
	});
}