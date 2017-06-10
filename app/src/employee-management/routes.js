const Home = require('./components/Home.vue')
const Registration = require('./components/Registration.vue')
const Edit = require('./components/Edit.vue')

export default [
  {
    name: 'emp-home',
    path: '/emp',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    name: 'emp-registration',
    path: '/emp/reg',
    component: Registration,
    meta: { requiresAuth: true }
  },
  {
    name: 'emp-edit',
    path: '/emp/edit',
    component: Edit,
    meta: { requiresAuth: true }
  }
]
