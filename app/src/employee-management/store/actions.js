import { SAVE } from './mutation-types'
import empServices from './../services'

export const save = ({commit}, request) => {
  empServices.register(request)
    .then(data => commit(SAVE, data))
    .catch(error => console.error(error))
}
