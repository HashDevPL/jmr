import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: function () {return import('./views/About.vue')}
    },
    {
      path: '/offer',
      name: 'offer',
      component: function () {return import('./views/Offer.vue')}
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: function () {return import('./views/Gallery.vue')}
    },
    {
      path: '/contact',
      name: 'contact',
      component: function () {return import('./views/Contact.vue')}
    }
  ]
})
