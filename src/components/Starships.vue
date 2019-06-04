<template>
  <div class="container pt-4 pb-4">

    <section>

      <h2>Starships</h2>

      <div class="d-flex flex-wrap">
        <router-link
          v-for="(starship) in results"
          :key="fetchStarshipId(starship)"
          :to="`/starships/${fetchStarshipId(starship)}`"
          class="card m-2"
          style="width: 12rem;"
        >
          <img
            :src="fetchImageUrl(starship)"
            class="card-img-top"
            alt="Card image cap"
          >

          <div class="card-body">
            <h5 class="card-title m-0">
              {{ starship.name }}
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
    await store.dispatch('starships/list')
    next()
  },
  computed: {
    ...mapState('starships', ['results'])
  },
  methods: {
    fetchStarshipId: starship => starship.url.replace(/\D/g, ''),
    fetchImageUrl (starship) {
      const id = this.fetchStarshipId(starship)
      return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }
  }
}
</script>
