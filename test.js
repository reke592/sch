let fs = require("fs");
let assert = require("assert");


function read(path, instance) {
	rs = fs.createReadStream(path);
	rs.on("data", function(data) {
		instance._template = data;
	});
	rs.on("error", function(err) {
		throw new Error(err);
	});
}

const Template = function(path) {
	
	var _path = path;
	var _params = [];
	var _template = null;

	read(_path, this);

	function read_template(data) {
		_template = data;
	}

	function test(template) {
		let pattern = /\${(.*)}/g;
		let vars = template.match(pattern);
		// let key, result;
		
		// result = template;

		// vars.forEach(function(item) {
		// 	key = item.replace(pattern, '$1');
		// 	result = result.replace(item, data[key]);
		// });

		// cb(result);
	}


	function render(data) {
		if(!_path) throw new Error("Template path not set");
		compile(_path, data);
	}

	return {
		path: _path,
		template: _template,
	}
};






let data = {
	title : "Testing Template Engine",
	home_url: "http://localhost:8000"
}


let t = Template("./public/index.html");
console.log(t)
