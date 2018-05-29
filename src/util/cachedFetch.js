/**
 * Wrapper for the FetchAPI fetch() method that caches responses in
 * sessionStorage and retrieves from the cache when the data hasn't reached its
 * specified timeout
 *
 * Heavily inspired by https://www.sitepoint.com/cache-fetched-ajax-requests/
 *
 * url - fetch url
 * init - options for fetch()
 * timeout - optional timeout in minutes, defaults to 1 minute
 */
const cachedFetch = (url, init = {}, timeout = 1) => {
  timeout *= 60

  let cacheKey = url

  // Fetch data and timeout from sessionStorage
  let cachedData = sessionStorage.getItem(cacheKey)
  let cacheTimeout = sessionStorage.getItem(cacheKey + 'time')

  // If this request exists in the store, check if the data is past its timeout
  if (cachedData !== null) {
    if (cacheTimeout > Date.now()) {
      // Return a Promise that resolves to a response containing the cached data
      let response = new Response(new Blob([cachedData]))
      return Promise.resolve(response)
    } else {
      // The response is too old, clean it up
      sessionStorage.removeItem(cacheKey)
      sessionStorage.removeItem(cacheKey + 'time')
    }
  }

  // Cached data was not returned so make a regular fetch() call
  return fetch(url, init).then(response => {
    if (response.status === 200) {
      let contentType = response.headers.get('Content-Type')
      // Only cache json and text data, no binary support
      if (contentType && (contentType.match(/application\/json/i) || contentType.match(/text\//i))) {
        response.clone().text().then(content => {
          sessionStorage.setItem(cacheKey, content)
          // Set the timeout time to 'timeout' milliseconds in the future
          sessionStorage.setItem(cacheKey + 'time', Date.now() + (timeout * 1000))
        })
      }
    }
    return response
  })
}

export default cachedFetch
