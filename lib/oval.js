/*
* @param schema_name String
* @param schema Object
* @param strict Boolean
*
* strict mode:
*		will throw new TypeError() instead of Console.log()
*
*	Example:
*		const schema = { 
*			name: String,
*			age: Number 
*		};
*		const validator = Validator("Employee", schema);
*
*		let emp = {}
*		emp.name = "erric";
*		emp.age = 25;
*
*		console.log(validator.validate(emp))
*		console.log(validator.data())
*
*/
function Validator(schema_name, schema, strict) {

	let _schema = schema;
	let _schema_name = schema_name;
	let _data = {};


	function data() {
		console.log("testing...")
		return _data;
	}


	function getSchema() {
		return _schema;
	}

	/* 
	*	function validate { key : val }, typeof val MUST match the _schema[key]
	*/
	function validate(obj) {
		let in_schema;
		for(key in obj)
		{
			in_schema = _schema[key];

			// exclude prototype methods in validation
			if(!_validateType(Function, obj[key])) {
				if(in_schema) {
					if(!_validateType(in_schema, obj[key]))
						return _TypeMismatch(key, obj[key], in_schema);
					else
						_data[key] = obj[key];
				}
				else
					return _UnknownField(key);
			}
		}
		return true;
	}


	function _validateType(clazz, val) {
		if(clazz == Number)
			return (val * 1) ? true : false;
		else
			return toString.call(val) == toString.call(clazz());
	}


	function _TypeMismatch(key, val, schema_type) {
		_data = {};
		_log(`Can't assign value of ${toString.call(val)} to schema ${_schema_name}.${key} ${toString.call(schema_type())}.`);
		return false;
	}


	function _UnknownField(key) {
		_data = {};
		_log(`unknown field "${key}" in ${_schema_name} schema.`);
		return false;
	}


	function _log(message) {
		if(strict === true) {
			throw new TypeError(`[err] ${message}`);
		} else {
			console.log(`[err] ${message}`);
		}
	}


	// expose methods
	return {
		data,
		getSchema,
		validate
	}

}

module.exports = Validator;