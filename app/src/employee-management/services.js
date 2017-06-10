import Vue from 'vue'
const url = '/employee-management'

function register (request) {
  return Vue.axios.post(`${url}/register`, request)
    .then((data) => Promise.resolve(data))
    .catch((error) => Promise.reject(error))
}

function list () {
  return Vue.axios.get(`${url}/ajax/list`)
    .then((data) => Promise.resolve(data))
    .catch((error) => Promise.reject(error))
}

function remove (request) {
  return Vue.axios.post(`${url}/remove`, request)
    .then((data) => Promise.resolve(data))
    .catch((error) => Promise.reject(error))
}

export default {
  register,
  remove,
  list
}