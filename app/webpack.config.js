require("webpack");
const path = require("path");
const build_path = "../public/build"

module.exports = {
	entry: "./main.js",
	output: {
		filename: path.join(build_path, "bundle.js")
	}
}