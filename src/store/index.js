import Vue from 'vue'
import Vuex from 'vuex'

import people from '@/store/people'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    people
  }
})
