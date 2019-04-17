<template>
  <div>
    <ul
      class="list-group"
      style="width: 40vw; margin-left: 30vw">
      <li
        v-for="(value, key, index) in planets[$route.params.id]"
        :key="index"
        class="list-group-item">
        <p class="font-weight-bold">
          {{ key }}
        </p>
        <div v-if="key !=='residents' && key !=='films' && key !=='url'">
          {{ value }}
        </div>

        <div v-else>
          <div v-if="key !=='url'">
            <div
              v-for="(link, linkIndex) in value"
              :key="linkIndex">
              <a :href="link">{{ link }}</a>
            </div>
          </div>

          <div v-else>
            <a :href="value">{{ value }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('planets/listPlanets', to.params.id)
    next()
  },
  async beforeRouteUpdate (to, from, next) {
    await store.dispatch('planets/listPlanets', to.params.id)
    next()
  },
  computed: {
    ...mapGetters('planets', ['planets'])
  }
}
</script>
