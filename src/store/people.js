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
    async list ({ commit }, page = 1) {
      // Fetch People from SWAPI and await the response.
      const results = await fetch('https://swapi.co/api/people')
        .then(function (response) {
          if (response.ok) {
            return response.json()
          }
        })
      commit('results', results.results)
    },
    async getPerson ({ commit }, id) {
      // Fetch People from SWAPI and await the response.
      const apiUrl = 'https://swapi.co/api/people/' + id

      const results = await fetch(apiUrl)
        .then(function (response) {
          if (response.ok) {
            return response.json()
          }
        })
      commit('results', results)
    }
  },
  getters: {
    getResults: state => {
      return state.results
    }
  }
}
