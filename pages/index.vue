<template>
  <div>
    <h1>Home</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/posts">Posts</router-link>
    <p>
      <button @click="increment">{{ counter }}</button><br>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  head: {
    title: 'Home page'
  },
  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
  fetch ({ store }) {
    store.commit('increment')
  },
  computed: mapState([
    'counter'
  ]),
  methods: {
    increment () { this.$store.commit('increment') }
  }
}
</script>
