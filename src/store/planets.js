const initialState = () => ({
  results: []
})

// Export the module so it can be included in the main store.
export default {
  // This module is namespaced so that it is a little more self-contained:
  // https://vuex.vuejs.org/guide/modules.html#namespacing
  namespaced: true,
  // https://vuex.vuejs.org/guide/state.html
  state: initialState,
  // https://vuex.vuejs.org/guide/mutations.html
  mutations: {
    results: (state, results = []) => (state.results = results)
  },
  // https://vuex.vuejs.org/guide/actions.html
  actions: {
    async listPlanets ({ commit }, page = 1) {
      const response = await fetch('https://swapi.co/api/planets')
      const { results } = await response.json()
      if (response.ok) {
        // If the response is OK commit the data to the store.
        commit('results', results)
      } else {
        // If the response is not OK, log the response to the console.
        console.error(response)
      }
    }
  },
  getters: {
    planets: state => state.results
  }
}
