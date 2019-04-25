import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import fs from 'fs';
import path from 'path';

// import store from '@/store'
import Home from '@/components/Home'

const localVue = createLocalVue()

localVue.use(Vuex)

test('Home renders correctly', (done) => {
  const rawData = fs.readFileSync(path.resolve(__dirname, '../data/swapi.json'))
  const parsedData = JSON.parse(rawData)

  const actions = {
    list: () => parsedData
  }
  const state = {}
  const store = new Vuex.Store({
    modules: {
      people: {
          namespaced: true,
          state,
          mutations: {
            results: (state, results = []) => (state.results = results)
          },
          actions,
      },
    }
  })

  const wrapper = mount(Home, { store, localVue })

  wrapper.vm.$nextTick(() => {
    expect(wrapper.html()).toMatchSnapshot()
    done()
  })
})
