import Vue from 'vue'
import VueRouter from 'vue-router'

// Instruct Vue to use the router plugin.
Vue.use(VueRouter)

const Home = () => import('@/components/Home')
const HomePage = () => import('@/components/HomePage')
const Person = () => import('@/components/Person')

// Export a new Vue Router instance to be used in the application.
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Vue.component('HomePage', HomePage)
    },
    {
      path: '/people',
      component: Vue.component('Home', Home)
    },
    {
      path: '/people/:id',
      component: Vue.component('Person', Person)
    }
  ]
})
