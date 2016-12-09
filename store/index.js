import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    posts: [],
    users: []
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    recievePosts (state, posts) {
      state.posts = posts
    },
    recieveUsers (state, users) {
      state.users = users
    }
  },
  actions: {
    getPosts ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => {
          commit('recievePosts', resp.data)
        })
    },
    getUsers ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp) => {
          commit('recieveUsers', resp.data)
        })
    }
  }
})

export default store
