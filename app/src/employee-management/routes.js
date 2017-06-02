const Home = require('./components/Home.vue')
const Registration = require('./components/Registration.vue')

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
