<template>
  <div>
    <h1 @change="updatePersonAttributes">{{ attributes.name }} </h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import store from '@/store'
export default {
  async beforeRouteEnter (to, from, next) {
    const action = await store.dispatch('people/getPerson', to.params.id)
    const json = await action.json()
    if(action.ok) {
      console.log(json.name)
      //attributes.name = json.name
      next(vm => vm.updatePersonAttributes(json))
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
    const json = await action.json()
    if(action.ok) {
      console.log('Name of person: ' + json.name)
      //attributes.name = json.name
      next(vm => vm.updatePersonAttributes(json))
    } else {
    next({
      path: '/'
    })
    this.$notify({
      group: 'notifs',
      title: 'Error',
      type: 'warn',
      text: 'Person ' + to.params.id + ' not found.'
    })
   }
  },
  data: function() {
    return {
      attributes: {
        name: ''
      }
    }
  },
  methods: {
    ...mapActions('getPerson', ['people/getPerson']),
    updatePersonAttributes(json) {
      this.attributes.name = json.name
    },
  },
  computed: {
    ...mapGetters('people', ['person'])
  }
}
</script>
