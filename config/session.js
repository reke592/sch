const session = require("express-session")
const MongoStore = require("connect-mongo")(session)

const sessionConfig = session({
    name: 'sessionId',
    secret: '4lt3rk3y',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: 'mongodb://127.0.0.1:27017/smpcs',
      touchAfter: 24 * 3600 // the session be updated only one time in a period of 24 hours
    })
  });

module.exports = sessionConfig