const path = require("path");
const server = require("./web/server");

process.env.NODE_ENV = "development";
server.start(8000);