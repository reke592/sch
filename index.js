const config = require("./config");
const server = require("./web/server");
const routes = require("./web/routes");
const path = require("path");

process.env.NODE_ENV = "development";
server.use(config);
server.use(routes);
server.start();
