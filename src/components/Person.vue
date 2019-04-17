<template>
  <div>
    <div v-for="(person, id) in results">
      <div v-if="$route.params.id == id">
        <div>
          <a href="../">&laquo; Back</a>
        </div>
        <h2>{{ person.name }}</h2>
        <div style="float: left; width: 20%">
          <img :src="`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`" width="100%" />
        </div>
        <ul style="float: left;">
          <li><strong>DOB:</strong> {{ person.birth_year }}</li>
          <li><strong>Gender:</strong> {{ person.gender }}</li>
          <li><strong>Height:</strong> {{ person.height }}</li>
          <li><strong>Weight:</strong> {{ person.mass }}</li>
          <li><strong>Hair Color:</strong> {{ person.hair_color }}</li>
          <li><strong>Eye Color:</strong> {{ person.eye_color }}</li>
          <li><strong>Skin Color:</strong> {{ person.skin_color }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('people/list', to.params.id)
    next()
  },
  async beforeRouteUpdate (to, from, next) {
    await store.dispatch('people/list', to.params.id)
    next()
  },
  computed: {
    ...mapState('people', ['results'])
  }
}
</script>
