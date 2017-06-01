/*
* This file contains all the environment variable declaraions.
*/
const express = require("express");
const bodyParser = require("body-parser");
const logger 	= require.main.require("./web/middleware/logger");
const cors = require.main.require("./web/middleware/cors");
const env = {};

env.dev = {
	settings : {
		"SERVER": "localhost",
		"DB" : "smpcs",
		"MONGO_PORT": 27017,
		"PORT" : 8000,
		"STATIC_ASSET_URL_PREFIX" : "/",
		"STATIC_DIR" : "public"
	},
	plugins : [
		bodyParser.json(),
		bodyParser.urlencoded({ extended : true }),
		cors
	]
};

env.prod = {
	settings: {},
	plugins: [
		logger
	]
};

module.exports = env;