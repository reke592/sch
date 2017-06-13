import userServices from '../services'
import {
  AUTHENTICATED,
  ERROR_REGISTRATION
} from './mutation-types'
import SignUpValidator from '../validators/SignUp'

export const login = function({commit}, request) {
  let {user, pass} = request

  if(!user) return Promise.reject('Username is required!')
  if(!pass) return Promise.reject('Password is required!')

  return userServices.login(request)
    .then(response => {
      commit(AUTHENTICATED, response.data)
      return Promise.resolve(response.data)
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

export const signUp = function({commit}, request) {
  let { fail, message } = SignUpValidator(request)
  if(fail) {
    commit(ERROR_REGISTRATION, message)
    return Promise.reject(message)
  }
  else { // run service
    return userServices.signUp(request)
      .then(response => {
        console.log(response)
        return Promise.resolve(response)
      })
      .catch(error => {
        console.log(error)
        return Promise.reject(error)
      })
  }
}