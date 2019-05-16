import HomePage from '../pages/home.page'
import PersonPage from '../pages/person.page'

describe('Person', () => {
  it('should list all 10 characters on the homepage', () => {
    HomePage.navigate();
    HomePage.waitForCardsToLoad(5000) // wait for all of the character cards to be loaded
    expect(HomePage.people.length).toBe(10) // verify all 10 character cards exist
  })
  it('should open each character card and display information', () => {
    for(var i in HomePage.people){
      HomePage.openCard(parseInt(i)) //click on the character card
      PersonPage.waitForInfoToLoad(5000) //wait for all the information on the person page to load
      expect(PersonPage.getPersonText()).toBe('Person ' + i) //verify text on person page is correct
      HomePage.navigate(); //navigate back to the homepage 
      HomePage.waitForCardsToLoad(5000) //wait for cards to load again - should probably move this directly into the navigate() function if its being used every time we call navigate.
    }
  })   
})