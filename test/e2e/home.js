describe('Home', () => {
  it('should list characters', async () => {
    await browser
      .url('/')
    const title = await browser.getTitle()
    expect(title).toBe('Force Vue Awakens')

    // Selector
    const linksDiv = await $('#links')
    const links = await linksDiv.$$('a')

    // Verify 10 people are listed
    expect(links.length).toBe(10)

    // Verify that 10 imgs and their source exist
    const imgs = await $$('img')
    expect(imgs.length).toBe(10)
    for (var i = 0; i <= 8; i++) {
      const img = await imgs[i].getAttribute('src')
      expect(img.substr(img.length - 5)).toBe((i + 1) + '.jpg')
    }
    // testing the last element individually because of substr
    const img1 = await imgs[9].getAttribute('src')
    expect(img1.substr(img1.length - 6)).toBe('10.jpg')

    // Verify names of Person
    for (var j = 0; j <= 9; j++) {
      const link = await links[j].getText()
      expect(['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Owen Lars', 'Beru Whitesun lars', 'R5-D4', 'Biggs Darklighter', 'Obi-Wan Kenobi'].includes(link)).toBe(true)
    }
    // const link1 = await links[0].getText()
    // expect(link1).toBe('Luke Skywalker')
  })
})
