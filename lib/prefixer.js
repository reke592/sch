module.exports = function(param) {
	let _prefix = param;

	function prefix(target) {
		return `${_prefix}${target}`;
	}

	return {
		prefix
	};
	
}