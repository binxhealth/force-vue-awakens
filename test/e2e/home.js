describe('Home', () => {
  it('should verify load and check for errors', async () => {
    await browser.url('/')
    const title = await browser.getTitle()
    expect(title).toBe('Force Vue Awakens')
    const skywalker = await browser.$('a=Luke Skywalker')
    await skywalker.waitForDisplayed(5000)
    expect(await browser.execute(() => window.errors.map(e => e.message)))
      .toContain('error test')
  })

  it('should list ten characters', async () => {
    await browser.url('/')

    // Wait for one of the characters to appear to verify data load
    const skywalker = await browser.$('a=Obi-Wan Kenobi')
    await skywalker.waitForDisplayed(5000)

    // Confirm ten results
    const names = await browser.$$('.card-title')
    expect(names.length).toBe(10)
  })
})
