const Home = require('./Home.vue')
const Registration = require('./Registration.vue')

export default [
  {
    name: 'emp-home',
    path: '/emp',
    component: Home
  },
  {
    name: 'emp-registration',
    path: '/emp/reg',
    component: Registration
  }
]
