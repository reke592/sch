const Home = require('./components/Home.vue')
const Registration = require('./components/Registration.vue')
const Edit = require('./components/Edit.vue')

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
  },
  {
    name: 'emp-edit',
    path: '/emp/edit',
    component: Edit
  }
]
