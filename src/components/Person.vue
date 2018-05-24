<template>
  <div>
    Person {{ $route.params.id }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('people/get', to.params.id)
    next()
  },
  async beforeRouteUpdate (to, from, next) {
    await store.dispatch('people/get', to.params.id)
    next()
  },
  computed: {
    ...mapGetters('people', ['person'])
  }
}
</script>
