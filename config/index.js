/*
* This file contains all the environment variable declaraions.
*/
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./settings");

exports.apply = function(app) {
	let env = process.env.NODE_ENV || "development";	
	let {dev, prod} = config;

	// default env
	for(key in dev.settings)
		app.set(key, dev.settings[key]);
	dev.plugins.forEach((plugin) => app.use(plugin));

	// additional env in production
	if("production" == env) {
		for(key in prod.settings)
			app.set(key, prod.settings[key]);
		prod.plugins.forEach((plugin) => app.use(plugin));
	}
}