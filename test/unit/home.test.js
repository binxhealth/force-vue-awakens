import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import store from '@/store'
import Home from '@/components/Home'

const localVue = createLocalVue()

localVue.use(Vuex)

test('Home renders correctly', () => {
  const wrapper = mount(Home, {
    store,
    localVue,
    methods: {
      errorTest: () => {}
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})
