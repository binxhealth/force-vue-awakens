//Frankenstien code that I am currently working on
//to get a Selenium/Jest test to click items on the index page
describe('Clicker', () => {
  it('should click on each Person listed in the index', async () => {
    await browser.url('/')
    for i in {
    WebElement mapObject = driver.findElement(By.xpath("//*[href()='#/people/']/d*"));
        Actions builder = new Actions(driver);
        builder.contextClick(mapObject).perform();
    }
  })
})
