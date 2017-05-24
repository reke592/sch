const locked = {};		// contains the lock-state per module environment

const ENV = function(slug) {

	if(locked[slug] == undefined) {
		locked[slug] = false;
	}

	function add(key, value) {
		if(!locked[slug]) {
			console.log(`[env] ${_computed_slug(key)} : ${value}`);
			process.env[_computed_slug(key)] = value;
		}
	}

	function lock() {
		console.log(`[fin] ${slug.toUpperCase()}`)
		locked[slug] = true;
	}

	function _computed_slug(key) {
		return `${slug.toUpperCase()}_${key.toUpperCase()}`;
	}

	return { add, lock };
};


const get = function(param) {
	let [slug, key] = param.split("/");
	return process.env[`${slug.toUpperCase()}_${key.toUpperCase()}`];
};

exports.create = ENV;
exports.get = get;