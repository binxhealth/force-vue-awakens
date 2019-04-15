import Vue from 'vue'
import Vuex from 'vuex'

import people from '@/store/people'
import starships from '@/store/starships'

// Instruct Vue to use the Vuex plugin.
Vue.use(Vuex)

// Export a new Vuex Store instance to be used in the application.
export default new Vuex.Store({
  // Modules are mini-state stores that can be combined into the main state
  // tree: https://vuex.vuejs.org/guide/modules.html
  modules: {
    people,
    starships
  }
})
