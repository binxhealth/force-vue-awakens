describe('Home', () => {
  it('should list characters', async () => {
    await browser.url('/')
    const title = await browser.getTitle()
//    const charachters = await browser.getH2()
    expect(title).toBe('Force Vue Awakens')
//    expect(charachters).toMatch('People')
    expect().toBe()
  })
})
