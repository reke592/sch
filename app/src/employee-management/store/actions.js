import { REG_RESPONSE, LIST, SELECT, CLEAR_SELECTED, REMOVE_EMPLOYEE } from './mutation-types'
import empServices from './../services'

export const register = ({commit}, request) => {
  return empServices.register(request)
    .then(response => {
      commit(REG_RESPONSE, response)
      return Promise.resolve(response)
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

export const list = ({commit, state}, request) => {
  if(state.refresh === true)
    return empServices.list()
      .then(response => {
        commit(LIST, response.data)
        return Promise.resolve(response)
      })
      .catch(error => {
        return Promise.reject(error)
      })
  else
    return Promise.resolve(state.list)
}

export const select = ({commit}, payload) => {
  commit(SELECT, payload)
  return Promise.resolve(payload)
}

export const clearSelected = ({commit}) => {
  commit(CLEAR_SELECTED)
  return Promise.resolve()
}

export const remove = ({commit, state}) => {
  return empServices.remove(state.selected)
    .then(response => {
      commit(REMOVE_EMPLOYEE, response)
      return Promise.resolve(response)
    })
    .catch(error => {
      return Promise.reject(error)
    })
}