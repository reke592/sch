const routes = [
	require("./modules/employee-management/routes")
];


const apply = function(app) {

	// index route	
	app.get("/", function(req, res) {
		res.redirect(app.get("STATIC_ASSET_URL_PREFIX"));
	});

	/*
	* Include all module route configurations in app.
	*/
	console.log("configuring routes...");
	routes.forEach(function(config) {
		config(app);
	});

}


exports.apply = apply;