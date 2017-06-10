import Vue from 'vue'
const url = '/user-management'

function login (request) {
  return Vue.axios.post(`${url}/login`, request)
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error))
}

export default {
  login
}