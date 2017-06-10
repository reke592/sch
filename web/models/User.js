const Helper = require.main.require('./lib/mongo-helper')
const Validator = require.main.require('./lib/oval')
const settings = require.main.require('./config/settings')

const { dev } = settings

const assert = require('assert')
const ObjectId = require('mongodb').ObjectId
const query = Helper(dev.settings.DB).query
const schema = require('./schema').User
const validator = Validator('User', schema)

const _collection = 'user'

const login = function(req, res) {
  var hour = 3600000
  req.session.regenerate(function() {
    req.session.user = req.body.user
    req.session.success = `Authenticated as ${req.body.user}`
    req.session.cookie.expires = new Date(Date.now() + hour)
    req.session.cookie.maxAge = hour
    res.send(req.session)
  })
}

exports.login = login