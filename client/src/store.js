import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  strict: true,
  state: {
    user: null,
    token: null,
    isUserLogin: false
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
      if (!token) {
        state.isUserLogin = false
      } else {
        state.isUserLogin = true
      }
    }
  },
  actions: {
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    setToken ({ commit }, token) {
      commit('setToken', token)
    }
  }
})
