/*
* This file contains all the environment variable declaraions.
*/
const express = require("express");
const bodyParser = require("body-parser");
const logger 	= require("./../web/middleware/logger");
const env = {};

env.dev = {
	settings : {
		"DB" : "smpcs",
		"PORT" : 8000,
		"STATIC_ASSET_URL_PREFIX" : "/public",
		"STATIC_DIR" : "public"
	},
	plugins : [
		bodyParser.json(),
		bodyParser.urlencoded({ extended : true })
	]
};

env.prod = {
	settings: {},
	plugins: [
		logger
	]
};

module.exports = env;