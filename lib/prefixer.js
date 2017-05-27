module.exports = function(prefix) {
	let _prefix = prefix;

	function url(target) {
		return `/${prefix}${target}`;
	}

	return {
		url
	};
	
}