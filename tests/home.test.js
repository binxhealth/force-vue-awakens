import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import store from '@/store'
import Home from '@/components/Home'

const localVue = createLocalVue()

localVue.use(Vuex)

test('Home renders correctly', () => {
  const wrapper = mount(Home, { store, localVue })
  expect(wrapper.html()).toMatchSnapshot()
})

describe('pagination', () => {
  let store, actions, state

  // Create new Vuex store with modified state
  const modifyState = (newState) => {
    new Vuex.Store({
      modules: {
        people: {
          ...Object.assign(state, newState),
          actions,
          namespaced: true
        }
      }
    })
  }

  // Create mock Vuex store with default state and mock actions
  beforeEach(() => {
    state = {
      page: 1,
      next: null,
      previous: null,
      results: []
    }
    actions = {
      list: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        people: {
          state,
          actions,
          namespaced: true
        }
      }
    })
  })

  it('should render page number', () => {
    modifyState({page: 3})
    const wrapper = mount(Home, { store, localVue })

    expect(wrapper.find('#pageNumber').text()).toBe('3')
  })

  it('should render first page with previous and next disabled', () => {
    const wrapper = mount(Home, { store, localVue })

    const previousButton = wrapper.find('#previousPage')
    const nextButton = wrapper.find('#nextPage')

    expect(previousButton.classes()).toContain('disabled')
    expect(nextButton.classes()).toContain('disabled')
  })

  it('should render first page with next enabled given non-null next', () => {
    modifyState({next: "https://swapi.co/api/people/?page=2"})

    const wrapper = mount(Home, { store, localVue })

    const previousButton = wrapper.find('#previousPage')
    const nextButton = wrapper.find('#nextPage')

    expect(previousButton.classes()).toContain('disabled')
    expect(nextButton.classes()).not.toContain('disabled')
  })

  it('should render last page with disabled next button', () => {
    modifyState({page: 2, previous: "https://swapi.co/api/people/?page=1"})

    const wrapper = mount(Home, { store, localVue })

    const previousButton = wrapper.find('#previousPage')
    const nextButton = wrapper.find('#nextPage')

    expect(previousButton.classes()).not.toContain('disabled')
    expect(nextButton.classes()).toContain('disabled')
  })
})
