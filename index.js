require("./config");
const server = require("./web/server");
const routes = require("./web/routes");
const env = require("./lib/env");

server.use(routes);
server.start();