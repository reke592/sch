module.exports = function(app) {
	
	let express = require("express");
	let router = express.Router();

	router.get("/", function(req, res) {
		res.redirect(app.get("STATIC_ASSET_URL_PREFIX"));
	});

	app.use(router);
};