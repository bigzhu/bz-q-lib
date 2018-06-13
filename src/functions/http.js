import axios from 'axios'
import { Notify } from 'quasar'
export const get = (url, params) => {
  return axios.get(url, {
      params: params
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      Notify.create(error.response.data.error)
    })
}
export const del = (url, params) => {
  return axios.delete(url, {
      params: params
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      Notify.create(error.response.data.error)
    })
}
export const post = (url, params) => {
  return axios.get(url, params)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      Notify.create(error.response.data.error)
    })
}
export const put = (url, params) => {
  return axios.put(url, params)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      Notify.create(error.response.data.error)
    })
}
