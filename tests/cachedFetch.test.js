import cachedFetch from '../src/util/cachedFetch'

beforeEach(() => {
  // fetch is mocked and returns fake data
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        json: function() {
          return 'fake'
        }
      });
    });
  });

  // sessionStorage is not available in Jest so it must be mocked
  global.sessionStorage = jest.fn();
  global.sessionStorage.setItem = jest.fn();
  global.sessionStorage.getItem = jest.fn();
  global.sessionStorage.removeItem = jest.fn();
})

it('should make fetch call by default', () => {
  cachedFetch('www.test.com')

  expect(global.fetch).toHaveBeenCalledTimes(1)
})

it('should use cache when available', () => {
  // getItem is mocked to return fake data or a time 10 seconds in the future
  // for items with time in the name
  global.sessionStorage.getItem = jest.fn().mockImplementation((key) => {
    return key.includes('time') ? Date.now() + 10000 : 'fake'
  });

  // Response is not available in Jest so mock it also, no implementation necessary
  global.Response = jest.fn()

  cachedFetch('www.test.com')

  expect(global.fetch).toHaveBeenCalledTimes(0)
})

it('should not use cache when data is expired', () => {
  // Time 1 second in the past
  global.sessionStorage.getItem = jest.fn().mockImplementation((key) => {
    return key.includes('time') ? Date.now() - 1000 : 'fake'
  });

  global.Response = jest.fn()

  cachedFetch('www.test.com')

  expect(global.fetch).toHaveBeenCalledTimes(1)
})
