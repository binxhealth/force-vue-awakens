export default{

  namespaced: true,

  state: {
    starships: [],
    shipInfo: [],
    shipPilots: [],
    shipFilms: []
  },
  mutations: {
    listStarships(state, data){
      state.starships = data.map((el) => {
        //get starship id from url
        let id = el.url.match(/([0-9])+/g)
        //add id to starship object
        el.id = id[0];
        return el
      })
    },
    setShipInfo(state, data){
      //set ship data
      state.shipInfo = data
      //clear previous pilots and films
      state.shipPilots = []
      state.shipFilms = []
    },
    addShipFilm(state, data){
      state.shipFilms.push({id: data.id, title: data.title, release_date: data.release_date})
    },
    addShipPilot(state, data){
      state.shipPilots.push({id: data.id, name: data.name})
    }
  },
  actions: {
    async list({commit}){
       //get starships from SWAPI API
       const response  = await fetch('https://swapi.co/api/starships/')
       //Parse JSON response
       const { results } = await response.json()
       if(response.ok){
         commit('listStarships', results)
       } else {
         //if response is not 'OK' log it to the console
         console.log(response)
       }
    },
    async get({commit, dispatch}, id){
      //get ship info from SWAPI API
      const response = await fetch('https://swapi.co/api/starships/'+ id + '/')
      //Parse JSON response
      const result = await response.json()
      if(response.ok){
        commit('setShipInfo', result)
        //set film values if applicable
        result.films.forEach((val, key) => {
            dispatch('getResource',{url: val, typ: 'films'})
        })
        //set pilot values if applicable
        result.pilots.forEach((val, key) => {
          dispatch('getResource',{url: val, typ: 'people'})
        })
      } else{
        //if response is not 'OK' log it to the console
        console.log(response)
      }
    },
    async getResource({commit}, data){
      //get resource id from url
      const id = data.url.match(/([0-9])+/g)
      //get resource info from SWAPI API
      const response = await fetch('https://swapi.co/api/'+ data.typ +'/'+ id[0] + '/')
      //Parse JSON response
      const result = await response.json()
      if(response.ok){
        //run typ specific mutation
        switch(data.typ){
          case 'films':
            commit('addShipFilm', {id: id[0], title: result.title, release_date: result.release_date})
          break;
          case 'people':
            commit('addShipPilot', {id: id[0], name: result.name})
          break;
        }
      } else{
        //if response is not 'OK' log it to the console
        console.log(response)
      }
    }
  }
}
