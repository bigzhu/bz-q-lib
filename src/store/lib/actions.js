import {
  // del,
  post,
  // put,
  get
} from '../../functions/http'

export const getOauthInfo = ({
  state,
  commit,
  dispatch
}) => {
  return get('/api/OauthInfo').then((data) => {
    commit('oauth_info', data)
    return data
  })
}

export const login = ({
  state,
  commit,
  dispatch
}, {
  user_name,
  password
}) => {
  let params = {}
  params.user_name = user_name
  params.password = password
  return post('/api/Login', params)
}
