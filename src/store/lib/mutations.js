/*
export const someMutation = (state) => {
}
*/

export const loading = (state, loading) => {
  // 加入计数器
  if (loading) {
    state.loading_count += 1
    state.loading = true
  } else state.loading_count -= 1

  if (state.loading_count < 1) {
    state.loading_count = 0
    state.loading = false
  }
}
export const oauth_info = (state, data) => {
  state.oauth_info = data
}