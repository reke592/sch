var env = require("./env");

const prefix = {
	msg: "[sys]",
	err: "[err]"
};

const Logger = function(enable) {
	
	function msg(msg) {
		_process(console.log, `${prefix.msg} ${msg}`);
	}

	function err(msg) {
		_process(console.error, `${prefix.err} ${msg}`);
	}

	function _process(fn, msg) {
		if(enable)
			return fn(msg);
	}

	return {
		msg,
		err
	}

}

exports.prefix = prefix;
exports.Logger = Logger;