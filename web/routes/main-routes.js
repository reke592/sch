// module.exports = function(app) {
	
// 	let express = require("express");
// 	let router = express.Router();

// 	router.get("/", function(req, res) {
// 		res.redirect(app.get("STATIC_ASSET_URL_PREFIX"));
// 	});

// 	app.use(router);
// };

// set entry-point's base_dir as last-resort for require function
const path = require("path");
module.paths.push(path.parse(require.main.filename).dir)

const express = require("express");
const router = express.Router();
const {settings} = require("config/settings").dev;

router.get("/", function(req, res) {
	res.redirect(settings["STATIC_ASSET_URL_PREFIX"]);
});

module.exports = router;