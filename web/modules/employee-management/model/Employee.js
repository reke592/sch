const schema 		= require("./schema").Employee
const validator = require.main.require("./lib/oval")("Employee", schema)
const Helper = require.main.require("./lib/mongo-helper")
const query = Helper("smpcs").query
const assert = require("assert")
const ObjectId = require("mongodb").ObjectId

const _collection = "employees"

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
				db.collection(_collection).insert(validator.data())
					.then(result => res.send(result))
					.catch(error => ERR_500(res, error))
			})
		})
		.catch(error => {
			ERR_400(res, error)
		})
}

const find = function(res, db, collection, query) {
	let cursor = db.collection(collection).find(query);
	cursor.toArray()
		.then(data => res.send(data))
		.catch(error => ERR_500(res, error))
	db.close()
}

const list = function(req, res) {
	query((err, db) => {
		find(res, db, _collection)
	})
}

const remove = function(req, res) {
	let {_id} = req.body
	query((err, db) => {
		db.collection(_collection).deleteOne({"_id": ObjectId(_id)})
			.then(result => {
				res.send(result)
			})
	})
}

exports.register = register
exports.list = list
exports.remove = remove