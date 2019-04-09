import Vue from 'vue'
import Vuex from 'vuex'

import people from '@/store/people'

// Instruct Vue to use the Vuex plugin.
Vue.use(Vuex)

// Export a new Vuex Store instance to be used in the application.
export default new Vuex.Store({
  // Modules are mini-state stores that can be combined into the main state
  // tree: https://vuex.vuejs.org/guide/modules.html
  modules: {
    people
  },
  getters: {
    // vuex.esm.js:95 Uncaught Error: [vuex] getters should be function but "getters.people" is {}.
    // Getting the error above, so I understand that this isn't proper Vuex syntax.
    // If I was better with Vue/Vuex syntax I would do something like this.
    people: {
      async get (state, id) {
        cachedPerson = state.people.find(person => person.id === id)

        if (cachedPerson) {
          return cachedPerson
        }

        const response = await fetch('https://swapi.co/api/people/' + id)
        const { results } = await response.json()

        if (response.ok) {
          // I imagine this `commit` syntax won't work, but I would intend to save the result to store.
          // commit('results', results)
          return results
        } else {
          // If the response is not OK, log the response to the console.
          console.error(response)
        }
      }
    }
  }
})
