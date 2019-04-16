import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import store from '@/store'
import Starship from '@/components/Starship'

const $route = {
  params: { id: 'foo' }
}

const localVue = createLocalVue()

localVue.use(Vuex)

test('Starship renders correctly', () => {
  const wrapper = mount(Starship, { store, localVue, mocks: { $route } })
  expect(wrapper.html()).toMatchSnapshot()
})
