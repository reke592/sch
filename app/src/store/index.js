import Vue from 'vue'
import Vuex from 'vuex'
import emp from '@/employee-management/store'
import user from '@/user-management/store'

Vue.use(Vuex)

const modules = {
  emp,
  user
}

export default new Vuex.Store({modules})
