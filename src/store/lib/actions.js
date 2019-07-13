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
  return get('/api/oauthInfo').then((data) => {
    // 出错时候依然会执行 then. 这里不能覆盖 oauthInfo 为 undefined
    if (data) {
      commit('oauthInfo', data)
    }
    return data
  })
}

export const login = ({
  state,
  commit,
  dispatch
}, {
  userName,
  password
}) => {
  let params = {}
  params.userName = userName
  params.password = password
  return post('/api/login', params)
}
