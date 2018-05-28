const initialState = () => ({
  results: []
})

// Helper function to fetch links from the API and return name
// of starship/planet/vehicle/etc.
async function renderAttributeName (url) {
  const results = await fetch(url)
    .then(function (response) {
      if (response.ok) {
        console.log(response)
        return response.json()
      }
    })
  return results.name
}

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
      const homeworld = await renderAttributeName(results.homeworld)
      results.homeworld = homeworld

      const species = await renderAttributeName(results.species[0])
      results.species = species

      if (results.vehicles !== undefined || results.vehicles.length !== 0) {
        console.log('has vehicles')
        let vehicles = []
        for (var i = 0; i < results.vehicles.length; i++) {
          var vehicleUrl = results.vehicles[i]
          console.log('vehicle url: ' + vehicleUrl)
          const vehicleName = await renderAttributeName(vehicleUrl)
          console.log('vehicle name: ' + vehicleName)
          vehicles[i] = {'name': vehicleName, 'url': vehicleUrl}
        }
        results.vehicles = vehicles
      }

      if (results.starships !== undefined || results.starships.length !== 0) {
        console.log('has vehicles')
        let starships = []
        for (var j = 0; j < results.starships.length; j++) {
          var starshipUrl = results.starships[j]
          console.log('vehicle url: ' + starshipUrl)
          const starshipName = await renderAttributeName(starshipUrl)
          console.log('vehicle name: ' + starshipName)
          starships[j] = {'name': starshipName, 'url': starshipUrl}
        }
        results.starships = starships
      }

      commit('results', results)
    }
  },
  getters: {
    getResults: state => {
      return state.results
    }
  }
}
