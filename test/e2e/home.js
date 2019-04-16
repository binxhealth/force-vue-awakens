describe('Home', () => {
  it('should have proper title', async () => {
    await browser.url('/')
    const title = await browser.getTitle()
    expect(title).toBe('Force Vue Awakens')
  })
  it('Should render Characters', async () => {
    const people = await $$('#person')
    // Make sure person divs have rendered
    expect(people.length).toBeGreaterThan(0)
    for (let x = 0; x < people.length; x++) {
      async (x) => {
        let name = await people[x].$('h5')
        // make sure charecter has a name
        expect(name.getText()).not.toBe('')
        let img = await people[x].$('img')
        // make sure charecter has an image
        expect(img.size()).toBeGreaterThan(0)
      }
    }
  })
  it('Should render Starships', async () => {
    const ships = await $$('#ship')
    // Make sure ship divs have rendered
    expect(ships.length).toBeGreaterThan(0)
    for (let x = 0; x < ships.length; x++) {
      async (x) => {
        let name = await ships[x].$('h5')
        // make sure ship has a name
        expect(name.getText()).not.toBe('')
        let img = await ships[x].$('img')
        // make sure ship has an image
        expect(img.size()).toBeGreaterThan(0)
      }
    }
  })
})
