var express = require("express");

const app = express();

const start = function(port) {
	let server_port = port || app.get("PORT");
	app.use(app.get("STATIC_ASSET_URL_PREFIX"), express.static(app.get("STATIC_DIR")));
	app.listen(server_port);
	console.log(`Express server has started on localhost:${server_port}`);
}

const use = function(config) {
	config.apply(app);
}

const settings = function() {
	return _settings_cache;
}

exports.start = start;
exports.use = use;