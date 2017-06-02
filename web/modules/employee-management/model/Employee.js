const schema 		= require("./schema").Employee
const validator = require.main.require("./lib/oval")("Employee", schema)
const Helper = require.main.require("./lib/mongo-helper")
const query = Helper("smpcs").query

const ERR_400 = function(res, error) {
	res.statusCode = 400
	res.setHeader('Content-Type', 'text/plain')
	res.end(error)
}

const ERR_500 = function(res, error) {
	res.statusCode = 500
	res.setHeader('Content-Type', 'text/plain')
	res.end(error)
}

const register = function(req, res) {
	validator.validate(req.body)
		.then(data => {
			query((err, db) => {
				db.collection("employees").insert(validator.data())
					.then(result => res.send(result))
					.catch(error => ERR_500(res, error))
			})
		})
		.catch(error => {
			ERR_400(res, error)
		})
}

exports.register = register;