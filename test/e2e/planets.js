describe('Planets', () => {
  beforeEach(async () => {
    await browser.url('/')
  })

  it('should be listed on the home page.', async () => {
    setTimeout(() => {
      const element = $$('#planetsSection > h2')
      expect(element.getText()).toBe('Planets')
    }, 1000)
  })
})
