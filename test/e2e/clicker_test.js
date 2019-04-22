// a majority of this is sudocode, that needs to be flushed
// out in correct terminology relating to Jest, Jasmine and Selenium.
// This is to get an idea of where I am going, as getting working code in
// a foreign tech stack will take some time.
// continuing to learn the tech stack as-of 04/22/19

require('selenium-webdriver');

describe('Clicker', () => {
  it('should click on each Person listed in the index', async () => {
    await browser.url('/')
    for i in index{
    WebElement mapObject = driver.findElement(By.xpath("//*[href()='#/people/']/d*"));
        Actions builder = new Actions(driver);
        builder.element = driver.find_element :xpath, '//input[@name="q"]'
        element.click();();
    }
  })
})
