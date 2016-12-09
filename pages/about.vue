<template>
  <div>
    <h1>About</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/posts">Posts</router-link>
    <p>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button><br>
    </p>
  </div>
</template>
<script>
export default {
  name: 'About',
  head: {
    title: 'About'
  }
}
</script>
