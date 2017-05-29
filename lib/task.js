const fs = require("fs");
const path = require("path");
const assert = require("assert");
const read = fs.createReadStream;
const write = fs.createWriteStream;
const resolve = path.resolve;

/*
* Copy file to other location
*	@param source String - absolute file path
* @param target String -  path
* @param create_dir Boolean flag
		true: create target dir
		false: 
**/
function copy(source, target, create_dir) {
	console.log(`[copy] ${source} ~ ${target}`);
	if(create_dir)
		createDirIfNotExist(target)
			.then(function() {
				read(source).pipe(write(target));
			});
	else
		read(source).pipe(write(target));
}



function createDirIfNotExist(target) {
	fs.exists(target, function(exist) {
		if(!exist) 
		{
			let parse = path.parse(target);
			let dir = (parse.ext != "")
					? parse.dir
					: target;
			console.log(`[create] directory ${dir}`);
			fs.mkdir(dir);
		}
	});

	return new Promise((resolve) => resolve(target));
}



function copy_dir(from_dir, to_dir, filter) {
	fs.exists(from_dir, function(exist) {
		if(!exist)
			throw new Error(`source directory ${from_dir} not exist.`);
		if(typeof from_dir != "string" || typeof to_dir != "string")
			throw new TypeError(`invalid parameter value in copy_dir(from_dir, to_dir). expected both String, got (${typeof from_dir}, ${typeof to_dir})`);

		createDirIfNotExist(to_dir).then(function() {
			ls(from_dir, (items) => {
				copy_all(items, from_dir, to_dir, filter, false);
			});
		});
		
	});
}


function copy_all(items, from_dir, to_dir, filter, create_dir) {
	let source, target;
	items.forEach((item) => {
		source = resolve(path.join(from_dir, item));
		target = resolve(path.join(to_dir, item));
		if(!toString.call(filter).match("Array")) {
			copy(source, target, create_dir);
		}
		else {
			if(filter.join().match(path.parse(source).ext)) {
				copy(source, target, create_dir);
			}
		}
	});
}


function ls(path, cb) {
	fs.readdir(path, function(err, result){
		assert.equal(null, err);
		cb(result);
	});
}


exports.ls = ls;
exports.copy = copy;
exports.copy_all = copy_all;
exports.copy_dir = copy_dir;