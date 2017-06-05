import {
  register,
  list,
  select,
  clearSelected,
  remove
} from './actions'

import {
  REG_RESPONSE,
  LIST,
  SELECT,
  CLEAR_SELECTED,
  REMOVE_EMPLOYEE
} from './mutation-types'

const state = {
  registration: null,
  deleted: null,
  list: [],
  refresh: true,
  selected: null
}

const actions = {
  register,
  list,
  select,
  clearSelected,
  remove
}

const mutations = {
  [REG_RESPONSE] (state, response) {
    state.registration = response
    state.refresh = true
  },
  [LIST] (state, response) {
    state.list = response
    state.refresh = false
  },
  [SELECT] (state, payload) {
    state.selected = payload
  },
  [CLEAR_SELECTED] (state) {
    state.selected = null
  },
  [REMOVE_EMPLOYEE] (state, response) {
    state.deleted = response
    state.refresh = true
  }
}

const getters = {
  regResponse: (state) => {
    return state.registration
  },
  list: (state) => {
    return state.list
  },
  selected: (state) => {
    let clone = {}
    for(var key in state.selected)
      clone[key] = state.selected[key]
    return clone
  }
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}
