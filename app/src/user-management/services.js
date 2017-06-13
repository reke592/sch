import Vue from 'vue'
const url = 'api/user-management'

function login (request) {
  return Vue.axios.post(`${url}/login`, request)
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error))
}

function signUp (request) {
	return Vue.axios.post(`${url}/signUp`, request)
		.then((response) => Promise.resolve(response))
		.then((error) => Promise.reject(error))
}

export default {
  login,
  signUp
}