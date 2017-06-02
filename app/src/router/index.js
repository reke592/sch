import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EmployeeManagementRoutes from '@/employee-management/routes'

const _ = require('lodash')

Vue.use(Router)

const routes = _.flatMap([
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  EmployeeManagementRoutes
])

export default new Router({routes})
