import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import store from '@/store'
import Person from '@/components/Person'
import 'isomorphic-fetch'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

test('Person renders correctly', () => {
  const wrapper = mount(Person, { store, localVue })
  expect(wrapper.html()).toMatchSnapshot()
})
