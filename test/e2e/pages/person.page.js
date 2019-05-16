import Page from './page'
class PersonPage extends Page{
  /**
  * define elements on the person page to be used for testing
  */
  get mainBody () { return $('main') }
  get personInfo () { return $('div') }

  /**
  * define page methods
  */
  navigate () {
    //super.open('/people')
  }
  /**
  * need to wait for dynamically loaded elements
  */
  waitForInfoToLoad(timeout){
    if(!this.personInfo.isExisting()){
        this.personInfo.waitForExist(timeout);
    }
  }
  /**
  * Return text from the person page
  */
  getPersonText () {
    return this.personInfo.getText()
  }
}

export default new PersonPage();