const Client = require("mongodb").MongoClient;
const config = require.main.require("./config/settings");
const assert = require("assert");

function mongoHelper(collection) {

  let _collection = collection;
  let _env = config.dev.settings;
  let _client = Client;
  let _url = `mongodb://${_env.SERVER}:${_env.MONGO_PORT}/${_collection}`;

  function save(data) {
    _client.connect(_url, (err, db) => {
      if (err) return Promise.reject(err);
      db.collection(_collection).insert(data);
      db.close();
      return Promise.resolve(data);
    });
  }

  return {
    save
  }

}

module.exports = mongoHelper