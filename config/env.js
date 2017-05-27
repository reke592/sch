/*
* This file contains all the environment variable declaraions.
*/
const express = require("express");

const logger = function(req, res, next) {
	console.log('logging...');
	next();
}

exports.apply = function(app) {
	const env = process.env.NODE_ENV || "development";	
	
	// default env
	app.set("DB", "smpcs");
	app.set("PORT", 8000);
	app.set("STATIC_ASSET_URL_PREFIX", "/public");
	app.set("STATIC_DIR", "public");
	app.set("LIB_PATH", `${__dirname}/../lib`);

	// development environment
	if("production" == env) {
		console.log("enabling production environment...");
		app.use(logger);
		// app.use(express.errorHandler());
	}

}