const empRoutes = require("./employee-management");

const routes = [
	require("./employee-management")
];

const apply = function(app) {
	// console.log(app);
	
	console.log("configuring routes...");
	routes.forEach(function(config) {
		config(app);
	});

}

exports.apply = apply;