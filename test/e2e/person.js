describe('Person', () => {
  it('Click on each link and verify Person[index] present', async () => {
    await browser
      .url('/')
    const link0 = await $('#links > a:nth-child(1)')
    const link1 = await $('#links > a:nth-child(2)')
    const link2 = await $('#links > a:nth-child(3)')
    const link3 = await $('#links > a:nth-child(4)')
    const link4 = await $('#links > a:nth-child(5)')
    const link5 = await $('#links > a:nth-child(6)')
    const link6 = await $('#links > a:nth-child(7)')
    const link7 = await $('#links > a:nth-child(8)')
    const link8 = await $('#links > a:nth-child(9)')
    const link9 = await $('#links > a:nth-child(10)')
    await browser.goToLinkVerifyAndBack(link0, 0)
    await browser.goToLinkVerifyAndBack(link1, 1)
    await browser.goToLinkVerifyAndBack(link2, 2)
    await browser.goToLinkVerifyAndBack(link3, 3)
    await browser.goToLinkVerifyAndBack(link4, 4)
    await browser.goToLinkVerifyAndBack(link5, 5)
    await browser.goToLinkVerifyAndBack(link6, 6)
    await browser.goToLinkVerifyAndBack(link7, 7)
    await browser.goToLinkVerifyAndBack(link8, 8)
    await browser.goToLinkVerifyAndBack(link9, 9)
    // This works too, but is harmful because of eval
    // for (var i = 0; i <= 9; i++) {
    //   await browser.goToLinkVerifyAndBack(eval(`link${i}`), i)
    // }
  })
})
