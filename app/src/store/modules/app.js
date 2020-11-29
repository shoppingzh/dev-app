const state = {
  name: '前端开发者平台',
  theme: 'light'
}

const getters = {
  name: state => state.name,
  theme: state => state.theme
}

const mutations = {
  TOGGLE_DARK_THEME(state) {
    state.theme = state.theme === 'dark' ? 'light' : 'dark'
  }
}

const actions = {

}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
