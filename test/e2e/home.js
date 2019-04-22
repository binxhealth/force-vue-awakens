// a majority of this is sudocode, that needs to be flushed
// out in correct terminology relating to Jest, Jasmine and Selenium.
// This is to get an idea of where I am going, as getting working code in
// a foreign tech stack will take some time.
// continuing to learn the tech stack as-of 04/22/19

describe('Home', () => {
  it('should list ten characters', async () => {
    await browser.url('/')
    const title = await browser.getTitle()
  })
})

describe('Charachter', () => {
  it('should have own image, name and link', async () => {
    const imageData = await browser.getElementById("href")
    const imageLink = await browser.getElementById("src")
    const nameData = await browser.getBody(h2)
    await browser.url('/')
    await page.index()
    expect(imageData).toBe('.jpeg')
    expect(imageLink).toBe('https://*')
    expect().toBe()
  })
})
