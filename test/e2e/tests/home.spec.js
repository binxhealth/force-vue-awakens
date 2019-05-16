import HomePage from '../pages/home.page'
const characterData = require('../data/characters.json');

describe('Home', () => {
  it('should load the homepage', () => {
    HomePage.navigate();
    const title = browser.getTitle()
    expect(title).toBe('Force Vue Awakens')
  })
  it('should list 10 characters', () => {
    HomePage.waitForCardsToLoad(5000) //Dynamic elements need to load before interacting with them
    expect(HomePage.people.length).toBe(10) //Verify there are 10 characters
  })  
  it('should have correct image, link, and name for each character', () => {
    var characterIndex;
    for(var i in HomePage.people){
      expect(HomePage.names[i].getText()).toBe(characterData.names[i]) //Verify character name is correct
      expect(HomePage.pictures[i].getAttribute('src'))
      .toBe('https://starwars-visualguide.com/assets/img/characters/' + (parseInt(i) + 1)  + '.jpg') //Verify image src is correct
      expect(HomePage.people[i].getAttribute('href')).toBe(browser.getUrl() + 'people/'+i) //Verify link is correct
    }
  }) 
})
