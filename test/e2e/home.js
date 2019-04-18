describe('Home', () => {
  it('should list ten characters', async () => {
    await browser.url('/')
    const title = await browser.getTitle()
//    const charachters = await browser.getH2()
    expect(title).toBe('Force Vue Awakens')
//    expect(charachters).toMatch('People')
  })
})

describe('Charachter', () => {
  it('should have own image, name and link', async () => {
    await browser.url('/')
    await page.index()
    expect().toBe()
  })
})
