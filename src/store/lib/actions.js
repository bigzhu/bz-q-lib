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
  return get('/api/oauth_info').then((data) => {
    // 出错时候依然会执行 then. 这里不能覆盖 oauth_info 为 undefined
    if (data) {
      commit('oauth_info', data)
    }
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
  return post('/api/login', params)
}
