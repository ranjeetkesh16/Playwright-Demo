const {test, expect} = require('@playwright/test');

test('Verify Error Message', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
        waitUntil: 'domcontentloaded'
    });
    await page.getByPlaceholder('Username').type('Admin',{ delay: 100});
    await page.getByPlaceholder('Password').type('admin1234',{ delay: 100});
    await page.locator('//button[normalize-space()="Login"]').click();
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');

    const errorMessage = await page.locator('//p[contains(@class, "oxd-alert-content-text")]').textContent();
    console.log("Error Message is: " + errorMessage);
    expect(errorMessage.includes('Invalid credentials')).toBeTruthy();

})