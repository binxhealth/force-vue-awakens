const initialState = () => ({
  results: []
})

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    results: (state, results = []) => (state.results = results)
  },
  actions: {
    async list ({ commit }, page = 1) {
      const response = await fetch('https://swapi.co/api/people')
      const { results } = await response.json()
      console.log('results', results)
      if (response.ok) {
        commit('results', results)
      } else {
        // TODO
        console.error(response)
      }
    }
  }
}
