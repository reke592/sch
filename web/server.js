const env = require("../lib/env");
const express = require("express");
const app = express();

const logger = function(req, res, next) {
	console.log('logging...');
	next();
}

const start = function(port) {
	let server_port = port || env.get("server/port");
	app.listen(server_port);
	console.log(`server has started, listening on localhost:${server_port}`);
}

const use = function(config) {
	config.apply(app);
}

app.use(logger);
app.use(express.static(env.get("server/static_dir")));

exports.start = start;
exports.use = use;