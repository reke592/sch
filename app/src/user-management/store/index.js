import {
  login,
  signUp
} from './actions'

import {
  AUTHENTICATED,
  ERROR_REGISTRATION
} from './mutation-types'

const state = {
  user: false,
  error: {}
}

const actions = {
  signUp,
  login
}

const mutations = {
  [AUTHENTICATED] (state, response) {
    state.user = response.user
  },
  [ERROR_REGISTRATION] (state, payload) {
    state.error.registration = payload
  }
}

const getters = {
  currentUser: function (state) {
    return state.user
  },
  error: function (state) {
    return state.error
  }
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}
