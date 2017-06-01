import Vue from 'vue'
const url = 'http://localhost:8000/employee-management'

export default {
  register (request) {
    // return Promise.resolve(request)
    console.log(Vue.axios.post)
    console.log(request)
    return Vue.axios.post(`${url}/register`, request)
      .then((data) => Promise.resolve(data))
      .catch((error) => Promise.reject(error))
  }
}
