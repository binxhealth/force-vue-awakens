import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/components/Home')
const Person = () => import('@/components/Person')

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Vue.component('Home', Home)
    },
    {
      path: '/people/:id',
      component: Vue.component('Person', Person)
    }
  ]
})
