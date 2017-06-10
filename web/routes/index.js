var express = require("express");

const routes = [
	require("./main-routes"),
	require("./employees"),
	require("./users")
];

// const apply = function(app) {

// 	/*
// 	* Include all module route configurations in app.
// 	*/
// 	console.log("configuring routes...");
// 	routes.forEach(function(config) {
// 		process.nextTick(function() {
// 			app.use(config)
// 		});
// 	});

// }

// exports.apply = apply;

module.exports = routes