require("./config/env");

var server = require("./web/server");
var env = require("./lib/env");

server.start(env.get("server/port"));