import Vue from 'vue'
import VueRouter from 'vue-router'

// Instruct Vue to use the router plugin.
Vue.use(VueRouter)

const Home = () => import('@/components/Home')
const Person = () => import('@/components/Person')
const Starship = () => import('@/components/Starship')
const Film = () => import('@/components/Film')

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
      path: '/starship/:id',
      component: Vue.component('Starship', Starship)
    },
    {
      path: '/film/:id',
      component: Vue.component('Film', Film)
    }
  ]
})
