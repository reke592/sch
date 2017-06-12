const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const env = require.main.require("./config");
var session = require.main.require("./config/session");
var app = express();

env.apply(app);
app.use(cookieParser());
app.use(session);
app.use(app.get("STATIC_ASSET_URL_PREFIX"), express.static(app.get("STATIC_DIR")));

routes.forEach(function(config) {
  process.nextTick(function() {
    app.use(config);
  });
});

const start = function(port) {
	let server_port = port || app.get("PORT");
	app.listen(server_port);
	console.log(`Express server has started on localhost:${server_port}`);
}

exports.start = start;
exports.app = app;