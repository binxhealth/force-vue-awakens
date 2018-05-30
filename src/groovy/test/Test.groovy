package test

import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.support.ui.WebDriverWait
import org.testng.annotations.AfterClass
import org.testng.annotations.AfterMethod
import org.testng.annotations.BeforeClass

class Test {
    static WebDriver driver
    def wait

    @BeforeClass
    void setUp() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\maxra\\IdeaProjects\\force-vue-awakens\\src\\chromedriver.exe")
        driver = new ChromeDriver()
        wait = new WebDriverWait(driver, 15)
        driver.manage().window().maximize()


        username = properties.username
        password = properties.password

    }

    //after every test, we want to reset the state of the browser
    @AfterMethod
    void cleanUp(){
        driver.manage().deleteAllCookies()
    }

    //after all tests, we want to quit the browser
    @AfterClass
    void tearDown(){
        driver.quit()
    }

}
