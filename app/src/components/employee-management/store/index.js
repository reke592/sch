import {
  save
} from './actions'

import {
  SAVE
} from './mutation-types'

const state = {
  submitted: {}
}

const actions = {
  save
}

const mutations = {
  [SAVE] (state, payload) {
    state.submitted = payload
  }
}

const getters = {
  regData: (state) => {
    return state.submitted
  }
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}
