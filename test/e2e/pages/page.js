export default class Page {
  //methods that are common among all pages.
  open (path) {
    browser.url(path)
  }

  getLogs(path){
  	return browser.url(path).log('browser')
  }
}
