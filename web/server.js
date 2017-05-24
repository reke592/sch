var http = require("http");
var env = require("../lib/env");
var log = require("../lib/logger").Logger("debug" == env.get("server/mode"));


const start = function(port) {
	http.createServer(onRequest).listen(port);
	log.msg("server has started, listening in localhost:8000");
}

// must be handled by router
const onRequest = function(req, res) {
	if(req.path = "/") {
		// console.log(env.get("server/mode"))
	}
}

exports.start = start;