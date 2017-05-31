const path = require("path");
const config = require("./config");
const server = require("./web/server");
const routes = require("./web/routes");

process.env.NODE_ENV = "development";
server.use(config);
server.use(routes);
server.start(8000);