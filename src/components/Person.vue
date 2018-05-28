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
    <ul class="list-group">
      <li v-for="vehicle in results.vehicles" class="list-group-item">
        {{vehicle}}
      </li>
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
  },
  computed: {
    ...mapState('people', ['results'])
  }
}
</script>
