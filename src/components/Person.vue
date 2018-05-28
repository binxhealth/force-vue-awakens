<template>
  <div class="container">
      <!--Only renders template if given results.-->
      <div class="card p-3" v-if="results !== undefined || results.length !== 0">
      <h1>{{results.name}}</h1>
      <h4>Biography</h4>
      <ul class="list-group pb-3" id="bio" >
          <li class="list-group-item">Homeworld: <a :href="results.homeworld.url">{{ results.homeworld.name }}</a></li>
          <li class="list-group-item">Birth year: {{ results.birth_year }}</li>
          <li class="list-group-item">Height: {{ results.height }}</li>
          <li class="list-group-item">Mass: {{ results.mass }}</li>
          <li class="list-group-item">Species: {{ results.species }}</li>
          <li class="list-group-item">Hair color: {{ results.hair_color }}</li>
          <li class="list-group-item">Eye color: {{ results.eye_color }}</li>
          <li class="list-group-item">Skin color: {{ results.skin_color }}</li>
        </ul>
      <ul class="list-group pb-3">
        <h4 v-if="results.starships===undefined || results.starships.length !== 0">Starships</h4> <!-- Only show starship if person has starships -->
        <li v-for="starship in results.starships" class="list-group-item">
          <a :href="starship.url">{{ starship.name }}</a>
        </li>
      </ul>
      <ul class="list-group">
        <h4 v-if="results.vehicles===undefined || results.vehicles.length !== 0">Vehicles</h4> <!-- Only show vehicles if person has vehicles -->
        <li v-for="vehicle in results.vehicles" class="list-group-item">
          <a :href="vehicle.url">{{ vehicle.name }}</a>
        </li>
      </ul>
      <div class="row pt-3 pl-3">
            <router-link
              :to="`/`">
            <button>Return home</button>
            </router-link>
      </div>
    </div>
    <div class="row" v-else>
      <p>uh oh nothing to show here</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter (to, from, next) {
    const resp = await store.dispatch('people/getPerson', to.params.id)
    // If we receive null back as a response, we redirect back to the home page
    // due to the invalid request
    if(resp === null) {
      next('/')
    } else {
      next()
    }
  },
  async beforeRouteUpdate (to, from, next) {
    const resp = await store.dispatch('people/getPerson', to.params.id)
    // Sends a quick notification that the request failed and
    // then redirects back to the home page
    if(resp === null) {
      this.$notify({
        group: 'notifs',
        title: 'Error: ' + 'invalid path for a person',
        text: 'Taking you back home.',
        type: 'warn'
      });
      next('/')
    } else {
      next()
    }
  },
  computed: {
    ...mapState('people', ['results'])
  },
}
</script>
