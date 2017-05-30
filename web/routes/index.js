var express = require("express");

const routes = [
	require("./main-routes"),
	require("../modules/employee-management/routes")
];

const apply = function(app) {

	/*
	* Include all module route configurations in app.
	*/
	console.log("configuring routes...");
	routes.forEach(function(config) {
		process.nextTick(function() {
			app.use(config)
		});
	});

}

exports.apply = apply;