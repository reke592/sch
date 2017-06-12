const path = require("path");
const server = require("./web/server");
const CORS = require("./web/middleware/cors");

process.env.NODE_ENV = "development";

server.app.use(CORS);
server.start(8000);