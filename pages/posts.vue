<template>
  <div id="posts">
    <ul>
      <li v-for="gist in gists">{{ gist.id }}</li>
    </ul>
    <ul>
      <li v-for="user in users">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
	name: 'posts',
  fetch ({ store }) {
    let promises = [
      new Promise((resolve) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((resp) => {
            resolve(resp.data)
          })
      }),
      new Promise((resolve) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then((resp) => {
            resolve(resp.data)
          })
      })
    ]

    return Promise.all(promises).then((resp) => {
      store.commit('recievePosts', resp[0])
      store.commit('recieveUsers', resp[1])
    })
  },
  mounted () {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getUsers')
  },
  computed: {
    gists () {
      return this.$store.state.posts
    },
    users () {
      return this.$store.state.users
    }
  }
}
</script>
