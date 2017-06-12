/*
* This file contains all the environment variable declaraions.
*/
const express = require("express");
const bodyParser = require("body-parser");
const logger 	= require.main.require("./web/middleware/logger");

const env = {};

env.dev = {
	settings : {
		"SERVER": "127.0.0.1",
		"DB" : "smpcs",
		"MONGO_PORT": 27017,
		"PORT" : 8000,
		"STATIC_ASSET_URL_PREFIX" : "/",
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