import userServices from '../services'
import {
  AUTHENTICATED
} from './mutation-types'

export const login = function({commit}, request) {
  return userServices.login(request)
    .then(response => {
      console.log(AUTHENTICATED)
      console.log(response)
      commit(AUTHENTICATED, response.data)
      return Promise.resolve(response.data)
    })
    .catch(error => {
      return Promise.reject(error)
    })
}