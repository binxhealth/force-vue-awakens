import org.openqa.selenium.WebDriver
import org.openqa.selenium.support.ui.WebDriverWait

class HomePage extends Page {


    def baseURL = "localhost:8080/#/"

    def titleCSS = "section h2"
    def personCardCSS = ".card.m-2"
    def cardTitleXpath = "//h5[contains(text(),'placeholder')]"

    HomePage(WebDriver driver, WebDriverWait wait){
        super(driver, wait)
    }


    //every page should have a visit method that points the driver to the page and waits for a unique element
    //the unique element for the homepage, the title, is not ideal but there are currently no other pages implemented
    def visitHomePage(){
        driver.get(baseURL)
        wait.until ExpectedConditions.presenceOfElementLocated(By.cssSelector(titleCSS))
    }

    def transitionToCharacterPage(String name){
        def updatedLocator = cardTitleXpath.replace('placeholder', name)
        click(By.XPath(updatedLocator))
        wait.until ExpectedConditions.presenceOfElementLocated(By.cssSelector(CharacterPage.titleCSS))
        //CharacterPage is not implemented, but here we assume that the title is a unique element not found in other pages
    }
}