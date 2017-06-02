const Client = require("mongodb").MongoClient
const config = require.main.require("./config/settings")
const assert = require("assert")

function mongoHelper(db) {

  let _db = db
  let _env = config.dev.settings
  let _client = Client
  let _url = `mongodb://${_env.SERVER}:${_env.MONGO_PORT}/${_db}`

  function query(cb) {
    _client.connect(_url, (err, db) => {
      if(cb)
        cb(err, db)
      db.close()
    })
  }

  return {
    query
  }
}

module.exports = mongoHelper