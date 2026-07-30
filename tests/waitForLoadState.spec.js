const { test, expect } = require('@playwright/test');

test('Working with Load State', async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator("[class$='subLink']").click();
    //await page.getByText("New user? Signup").click
    //await page.waitForTimeout(3000);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("//input[@name='name']").type("Ranjeet");
    await page.locator("//input[@name='email']").type("ranjeet@example.com", { delay: 100 });
    await page.locator("//input[@name='password']").type("123456", { delay: 100 });
    const checkboxCount = await page.locator("[class='form-check-input']").count();
    expect(checkboxCount).toBe(41);

    await page.locator("(//input[@class='form-check-input'])[1]").check();
    await page.locator("(//input[@class='form-check-input'])[2]").check();
    await page.locator("(//input[@class='form-check-input'])[3]").check();
    await page.locator("(//input[@class='form-check-input'])[6]").check();

    const RadioCount  = await page.getByRole('radio', { name: 'gender' }).count();
   // expect(RadioCount).toBe(2);
    await page.locator("(//input[@name='gender'])[1]").check();

    await page.locator('#state').selectOption({ value: 'Uttar Pradesh' });
    await page.locator('#hobbies').selectOption(['Playing', 'Reading','Dancing']);
    await page.waitForTimeout(3000);

    // await page.locator("//button[contains(text(),'Sign up')]").click();
    // await page.waitForLoadState('networkidle');
    // await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/login");    

})