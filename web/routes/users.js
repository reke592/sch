const path = require('path')
const router = require('express').Router()
const prefix = require.main.require('./lib/prefixer')(`/user-management`).prefix
const Users = require('../models/User')

router.post(prefix('/login'), Users.login)

console.log(`/${path.basename(__dirname)}`)

module.exports = router