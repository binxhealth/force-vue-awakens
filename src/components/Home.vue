<template>
  <div class="container pt-4 pb-4">

    <section>

      <h2>People</h2>

      <div id="links" class="d-flex flex-wrap">
        <router-link id="singleLink"
          v-for="(person, id) in results"
          :to="`/people/${id}`"
          :key="id"
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

  </div>
</template>

<script>
import { mapState } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter(to, from, next) {
    await store.dispatch('people/list')
    next()
  },
  computed: {
    ...mapState('people', ['results'])
  }
}
</script>
