import {
  login
} from './actions'

import {
  AUTHENTICATED
} from './mutation-types'

const state = {
  user: false
}

const actions = {
  login
}

const mutations = {
  [AUTHENTICATED] (state, response) {
    state.user = response.user
  }
}

const getters = {
  currentUser: function (state) {
    return state.user
  }
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}
