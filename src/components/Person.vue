<template>
  <div>
    Person {{ $route.params.id }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import store from '@/store'
export default {
  async beforeRouteEnter (to, from, next) {
    const action = await store.dispatch('people/getPerson', to.params.id)
    if(action.ok) {
      console.log(action.json())
      next()
    } else {
      // If the response from the API is not ok, then we redirect to 404 page 
      next (
        {
        path: '404'
        }
      )
    }
  },
  async beforeRouteUpdate (to, from, next) {
   const action = await store.dispatch('people/getPerson', to.params.id)
   if(action.ok) {
    next()
   } else {
     next(
       {
         path: '/'
       }
     )
     this.$notify({
      group: 'notifs',
      title: 'Error',
      type: 'warn',
      text: 'Person ' + to.params.id + ' not found.'
     })
   }
  },
  methods: {
    ...mapActions('getPerson', ['people/getPerson'])
  },
  computed: {
    ...mapGetters('people', ['person'])
  }
}
</script>
