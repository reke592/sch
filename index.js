const env = require("./config/env");
const server = require("./web/server");
const routes = require("./web/routes");

process.env.NODE_ENV = "development";

server.use(env);
server.use(routes);
server.start();