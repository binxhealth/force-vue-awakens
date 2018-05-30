import Vue from 'vue'
import VueRouter from 'vue-router'

// Instruct Vue to use the router plugin.
Vue.use(VueRouter)

const Home = () => import('@/components/Home')
const Person = () => import('@/components/Person')
const PageNotFound = () => import('@/components/PageNotFound')
// Export a new Vue Router instance to be used in the application.
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Vue.component('Home', Home)
    },
    {
      path: '/people/:id',
      component: Vue.component('Person', Person)
    },
    {
      path: '*',
      component: Vue.component('PageNotFound', PageNotFound)
    }
  ]
})
