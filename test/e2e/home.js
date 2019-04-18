describe('Home', () => {
  it('should list characters', async () => {
    await browser.url('/')
    const title = await browser.getTitle()
    expect(title).toBe('Force Vue Awakens')
  });

  it('should list 10 people', async () => {
	await browser.pause(4000);
	const cards = await $$('a.card');
	expect(cards.length).toBe(10);
  });

  it('should list a name for each person', async () => {
	const names = await $$('.card .card-title');
	expect(names.length).toBe(10);
  });

  it('should display an image for each person', async () => {
	const images = await $$('.card img');
	expect(images.length).toBe(10);

	for(let img of images) {
		const isDisplayed = await img.isDisplayed();
		expect(isDisplayed).toBe(true);
	}
	});
});
