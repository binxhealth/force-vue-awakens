<template>
  <div class="container pt-4 pb-4">
    <section id="peopleSection">
      <h2>People</h2>

      <div class="d-flex flex-wrap">
        <router-link
          v-for="(person, id) in peopleList"
          :key="id"
          :to="`/people/${id}`"
          class="card m-2"
          style="width: 12rem;">
          <img
            :src="`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`"
            class="card-img-top"
            alt="Card image cap">

          <div class="card-body">
            <h5 class="card-title m-0">
              {{ person.name }}
            </h5>
          </div>
        </router-link>
      </div>
    </section>

    <section id="planetsSection">
      <h2>Planets</h2>

      <div class="d-flex flex-wrap">
        <router-link
          v-for="(planet, id) in planetList"
          :key="id"
          :to="`/planets/${id}`"
          class="card m-2"
          style="width: 12rem;">
          <img
            :src="`https://starwars-visualguide.com/assets/img/planets/${id + 2}.jpg`"
            class="card-img-top"
            alt="Card image cap">

          <div class="card-body">
            <h5 class="card-title m-0">
              {{ planet.name }}
            </h5>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('people/list')
    await store.dispatch('planets/listPlanets')
    next()
  },
  computed: {
    ...mapState('people', { peopleList: 'results' }),
    ...mapState('planets', { planetList: 'results' })

  }
}
</script>
