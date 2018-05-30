import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import Person from '@/components/Person'

const localVue = createLocalVue()

localVue.use(Vuex)

const results = {
  'name': 'Darth Vader',
  'height': '202',
  'mass': '136',
  'hair_color': 'none',
  'skin_color': 'white',
  'eye_color': 'yellow',
  'birth_year': '41.9BBY',
  'gender': 'male',
  'homeworld': {'name': 'Tatooine', 'url': 'https://swapi.co/api/planets/1/'},
  'species': 'Human',
  'vehicles': [],
  'starships': [{'name': 'TIE Advanced x1', 'url': 'https://swapi.co/api/starships/13/'}]
}

const state = {
  'results': results
}

var store = new Vuex.Store({
  modules: {
    people: {
      state,
      namespaced: true
    }
  }
})

const wrapper = mount(Person, { store, localVue })
test('Person renders name correctly', () => {
  expect(wrapper.find('h1').text()).toBe('Darth Vader')
})

test('Person renders homeworld correctly', () => {
  expect(wrapper.find('#bio').find('a').text()).toBe('Tatooine')
})

test('Person renders starships correctly', () => {
  expect(wrapper.find('#starships').find('a').text()).toBe('TIE Advanced x1')
})
