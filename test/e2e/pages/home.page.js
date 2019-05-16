import Page from './page'
class HomePage extends Page{
  /**
  * define elements on the homepage to be used for testing
  */
  get mainBody () { return $('main'); }
  get header () { return $('h2*=People'); }
  get firstCard() { return $('a.card.m-2'); }
  get people () { return $$('a.card.m-2'); }
  get names () { return $$('.card-title'); }
  get pictures () { return $$('.card-img-top'); }

  /**
  * define page methods
  */
  navigate () {
    super.open('')
  }
  /**
  * needed a function to wait for dynamically loaded elements
  */
  waitForCardsToLoad (timeout){
    if(!this.firstCard.isExisting()){
        this.firstCard.waitForExist(timeout);
      }
  }
  /**
  * Click on person card given cardNumber
  */
  openCard (cardNumber) {
    return this.people[cardNumber].click()
  }
}

export default new HomePage();