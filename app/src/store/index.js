import Vue from 'vue'
import Vuex from 'vuex'
import emp from '@/employee-management/store'

Vue.use(Vuex)

const modules = {
  emp
}

export default new Vuex.Store({modules})
