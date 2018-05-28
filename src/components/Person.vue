<template>
  <div class="container">
    <h1>{{results.name}}</h1>
    
    <ul class="list-group">
      <li class="list-group-item">Birth year: {{ results.birth_year }}</li>
      <li class="list-group-item">Height: {{ results.height }}</li>
      <li class="list-group-item">Mass: {{ results.mass }}</li>
      <li class="list-group-item">Eye color: {{ results.eye_color }}</li>
      <li class="list-group-item">Skin color: {{ results.skin_color }}</li>  
    </ul>
    <div class="row pt-3 pl-3">
          <router-link
            :to="`/`">
          <button>Return home</button>
          </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('people/getPerson', to.params.id)
    next()
    // if(action.ok) {
    //   // const person = getResults
    //   // attributes.name = json.name
    //   // (vm => vm.updatePersonAttributes(action))
    //   next()
    // } else {
    //   // If the response from the API is not ok, then we redirect to 404 page 
    //   next (
    //     {
    //     path: '404'
    //     }
    //   )
    // }
  },
  async beforeRouteUpdate (to, from, next) {
    await store.dispatch('people/getPerson', to.params.id)
    next()
    // console.log(action)
    // console.log("Store.state: " + store.state.people.results)
    // if(action.ok) {
    //   // const person = getResults()
    //   // console.log(person)
    //   //attributes.name = json.name
    //   //next(vm => vm.updatePersonAttributes(action))
    //   next()
    // } else {
    // next({
    //   path: '/'
    // })
    // this.$notify({
    //   group: 'notifs',
    //   title: 'Error',
    //   type: 'warn',
    //   text: 'Person ' + to.params.id + ' not found.'
    // })
   // }
  },
  // data: function() {
  //   return {
  //     attributes: {
  //       name: ''
  //     }
  //   }
  // },
  // methods: {
  //   ...mapActions('attributes'),
  // },
  computed: {
    ...mapState('people', ['results'])
  }
}
</script>
