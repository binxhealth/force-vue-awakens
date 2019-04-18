// a decent majority of this is sudocode, needs to be flushed
// out in correct terminology relating to Jest, Jasmine and Selenium
describe('Home', () => {
  it('should list ten characters', async () => {
    await browser.url('/')
    const title = await browser.getTitle()
    const imageData = await browser.getHref('datatype')
    const imageLink = await browser.getHref()
//    const charachters = await browser.getH2()
    expect(title).toBe('Force Vue Awakens')
//    expect(charachters).toMatch('People')
    expect(imageData).toBe('.jpeg')
    expect(imageLink).toBe('https://*')
  })
})

describe('Charachter', () => {
  it('should have own image, name and link', async () => {
    const imageData = await browser.get()
    const nameData = await browser.getBody(h2)
    const imageLink = await browser.getHref()
    await browser.url('/')
    await page.index()
    expect().toBe()
  })
})
