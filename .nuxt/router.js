'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _25c8931c = process.BROWSER_BUILD ? () => System.import('/Users/teepluss/Sites/Vuejs/nuxtjs.vue/pages/about.vue') : require('/Users/teepluss/Sites/Vuejs/nuxtjs.vue/pages/about.vue')

const _45806de1 = process.BROWSER_BUILD ? () => System.import('/Users/teepluss/Sites/Vuejs/nuxtjs.vue/pages/index.vue') : require('/Users/teepluss/Sites/Vuejs/nuxtjs.vue/pages/index.vue')

const _23df4f3c = process.BROWSER_BUILD ? () => System.import('/Users/teepluss/Sites/Vuejs/nuxtjs.vue/pages/posts.vue') : require('/Users/teepluss/Sites/Vuejs/nuxtjs.vue/pages/posts.vue')


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    // Scroll to the top by default
    let position = { x: 0, y: 0 }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}

export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'router-link-active',
  scrollBehavior,
  routes: [
    
    {
      path: '/about',
      component: _25c8931c,
      name: 'about'
    },
    
    {
      path: '/',
      component: _45806de1,
      name: 'index'
    },
    
    {
      path: '/posts',
      component: _23df4f3c,
      name: 'posts'
    }
    
  ]
})
