const Login = require('./user-management/components/Login.vue')
const Components = {}

Components.install = function(Vue, options) {
  Vue.component('login', Login)
}

module.exports = Components