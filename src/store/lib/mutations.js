/*
export const someMutation = (state) => {
}
*/

export const loading = (state, loading) => {
  // 加入计数器
  if (loading) {
    state.loadingCount += 1
    state.loading = true
  } else state.loadingCount -= 1

  if (state.loadingCount < 1) {
    state.loadingCount = 0
    state.loading = false
  }
}
export const oauthInfo = (state, data) => {
  state.oauthInfo = data
}
