import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.support.ui.WebDriverWait

class Page {
    //every page has the test's webdriver passed to it, and a fluent wait tied to that driver
    def driver
    def wait

    //every page also has a list of element locators corresponding to elements we wish to interact with
    //the page superclass has none, however

    Page(WebDriver driver, WebDriverWait wait) {
        this.driver = driver
        this.wait = wait
    }

    //these methods provide core behavior based on an element's locator
    //in other words, we only need to specify the locator in the test class, making it neater

    void click(By locator){
        driver.findElement(locator).click()
    }

    void sendText(By locator, String text){
        driver.findElement(locator).sendKeys(text)
    }

    def readText(By locator){
        driver.findElement(locator).getText()
    }

    def readAttribute(By locator, String attribute){ //being able to get any attribute of the element in question is highly useful
        driver.findElement(locator).getAttribute(attribute)
    }
}