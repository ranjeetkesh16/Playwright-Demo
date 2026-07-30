const   {test, expect, devices} = require('@playwright/test');

test('Handle Auto Suggestion', async ({ page }) => {
    await page.goto("https://google.com");
    await page.locator('textarea[name="q"]').type('Playwright testing');
    const suggestions = await page.waitForSelector("//li[@role='presentation']");
    await expect(suggestions.first()).toBeVisible();
    const elements = await page.$$("//li[@role='presentation']");

    for (const element of elements) {
        const text = await element.textContent();
        console.log(text);
        if(text.includes('course')) {
            await element.click();
            break;
        }
    }

    // await page.waitForSelector('//li[@role="presentation"]', { state: 'visible' });
    // await page.$$('//li[@role="presentation"]').then(async (elements) => {
    //     for (const element of elements) {
    //         const text = await element.textContent();
    //         console.log(text);
    //         if (text.includes('course')) {
    //             await element.click();
    //             break;
    //         }
    //     }
    // });


})