const config = require("../config");
const env = require("../lib/env");
const express = require("express");
const app = express();

const logger = function(req, res, next) {
	console.log('logging...');
	next();
}


app.use(logger);
app.use(express.static(env.get("server/static_dir")));

// overriden by express.static
// app.get('/', function(req, res) {
// 	res.send("Hello");
// });


app.listen(env.get("server/port"));