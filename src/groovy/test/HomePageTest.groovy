import org.testng.annotations.Test

class HomePageTest extends Test {

    @Test
    void characterTransitionTest(){
        HomePage homePage = new HomePage(driver, wait)
        homePage.visitHomePage()

        homePage.transitionToCharacterPage("R2-D2")
        CharacterPage characterPage = new CharacterPage(driver, wait)
        Assert.assertEquals(readAttribute(By.cssSelector(characterPage.titleCSS), "text"), "R2-D2")
    }


}