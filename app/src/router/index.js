import Vue from 'vue'
import Router from 'vue-router'
import {auth} from './guard'
import Hello from '@/components/Hello'
import EmployeeManagementRoutes from '@/employee-management/routes'

const _ = require('lodash')

Vue.use(Router)

const routes = _.flatMap([
  {
    path: '/',
    name: 'main',
    component: Hello,
    meta: { requiresAuth: true }
  },
  EmployeeManagementRoutes
])

const router = new Router({routes})
router.beforeEach(auth)

export default router
