const {test, expect, devices} = require('@playwright/test');
const dataSet = JSON.parse(JSON.stringify(require("../loginData.json")));

test.describe('Data Driven Login', () => {

    for (const data of dataSet) {
        test(`Login with ${data.id}`, async ({ page }) => {
            await page.goto("https://freelance-learn-automation.vercel.app/login");
            await page.locator("//input[@name='email1']").fill(data.email);
            await page.locator("//input[@name='password1']").fill(data.password);
           // await page.locator("//button[contains(text(),'Login')]").click();
            //await page.waitForLoadState('networkidle');
           // await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/dashboard");
        });
    }

});

