const path = require('path');
const express = require('express');
const router = express.Router();
const {settings} = require.main.require('./config/settings').dev;

router.get('/', function(req, res) {
	res.redirect(settings['STATIC_ASSET_URL_PREFIX']);
});

module.exports = router;