require("./env");
const app_config = require("./app");

// exports.configure = function(app) {
// 	app_config(app);
// }

module.exports = {
	configure : app_config
}