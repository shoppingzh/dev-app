import { toggle } from '@/utils/theme'

const state = {
  name: '前端开发者平台',
  theme: 'light'
}

const getters = {
  name: state => state.name,
  theme: state => state.theme
}

const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme
  }
}

const actions = {
  toggleDarkTheme({ state, commit }) {
    const theme = state.theme === 'dark' ? 'light' : 'dark'
    return new Promise((resolve) => {
      toggle(theme)
      commit('SET_THEME', theme)
      resolve()
    })
  }
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
