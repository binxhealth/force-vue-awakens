const initialState = () => ({
  page: 1,
  next: null,
  previous: null,
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
    // Save results and next/previous links to the store
    results: (state, response) => {
      state.results = response.results
      state.next = response.next
      state.previous = response.previous
    },
    // Update the current page number
    page: (state, page) => (state.page = page)
  },
  // https://vuex.vuejs.org/guide/actions.html
  actions: {
    // This action takes state to use the current page as a default value
    async list ({ commit, state }, page = state.page) {
      // Fetch People from SWAPI and await the response.
      const response = await fetch('https://swapi.co/api/people/?page=' + page)
      if (response.ok) {
        // If the response is valid, parse the JSON string and commit the result
        commit('results', await response.json())
        // Commit the new page number
        commit('page', page)
      } else {
        // If the response is not OK, log the response to the console.
        console.error(response)
      }
    }
  }
}
