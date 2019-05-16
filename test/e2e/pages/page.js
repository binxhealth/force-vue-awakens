export default class Page {
  // methods that are common among all pages.
  open (path) {
    browser.url(path)
  }
  // This doesn't work
  getLogs (path) {
    return browser.url(path).log('browser')
  }
}
