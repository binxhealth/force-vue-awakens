// Tried to grab console errors in webdriverio through the browser.log api in afterTest hook but unfortunately not able to get it to work
// Executed the test in testcafe instead. No config required. Just install npm i -g testcafe globally
// To run the test, tetcafe chrome test/e2e/checkError.js
import { Selector, ClientFunction, t } from 'testcafe'

fixture`Check console error on each page`
  .page`http://127.0.0.1:8080`
// const goBack = ClientFunction(() => window.history.back())
const checkError = async function () {
  const { error } = await t.getBrowserConsoleMessages()
  await t.expect(error[0]).notOk()
}
// const link0 = Selector('#links > a:nth-child(1)')
// const link1 = Selector('#links > a:nth-child(2)')
// const link2 = Selector('#links > a:nth-child(3)')
// const link3 = Selector('#links > a:nth-child(4)')
// const link4 = Selector('#links > a:nth-child(5)')
// const link5 = Selector('#links > a:nth-child(6)')
// const link6 = Selector('#links > a:nth-child(7)')
// const link7 = Selector('#links > a:nth-child(8)')
// const link8 = Selector('#links > a:nth-child(9)')
// const link9 = Selector('#links > a:nth-child(10)')

test('Console error test', async t => {
  await t.eval(() => window.localStorage.setItem('hap_token', '87b42a2863c3046ea0d56563d616064917072e87'))
  await t.wait(5000)
  await checkError()
  // Click on each link and check for console errors

  // TODO Currently getting a vuex error, fix it and run the following code
  // await t.click(link0)
  // await t.debug()
  // await checkError()
  // await goBack()
  // await t.click(link1)
  // await t.wait(5000)
  // await checkError()
  // await goBack()
  // await t.click(link2)
  // await checkError()
  // await goBack()
  // await t.click(link3)
  // await checkError()
  // await goBack()
  // await t.click(link4)
  // await checkError()
  // await goBack()
  // await t.click(link5)
  // await checkError()
  // await goBack()
  // await t.click(link6)
  // await checkError()
  // await goBack()
  // await t.click(link7)
  // await checkError()
  // await goBack()
  // await t.click(link8)
  // await checkError()
  // await goBack()
  // await t.click(link9)
  // await checkError()
  // await goBack()
})
