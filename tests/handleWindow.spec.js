const {test, expect} = require('@playwright/test');
test('Handle Windows', async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto("https://freelance-learn-automation.vercel.app/login");
    const [newPage] = await Promise.all
        (
            [
                context.waitForEvent('page'),
                await page1.locator("(//a[contains(@href,'facebook')])[1]").click()

            ]
        );

        
    await newPage.waitForTimeout(3000);
    console.log(await newPage.title());
    console.log(await newPage.url());

    //fill email and password in facebook login popup window
    await newPage.locator("(//input[@name='email'])[2]").type("ranjeet@example.com", { delay: 100 });
    await newPage.locator("(//input[@name='pass'])[2]").type("123456", { delay: 100 });
    //await newPage.locator("(//span[contains(text(),'Log in')])[3]").click();
    await newPage.waitForTimeout(3000);

    //fill email and password in facebook topbar
    await newPage.locator("//div[@aria-label='Close']").click();
    await newPage.locator("(//input[@name='email'])[1]").type("ranjeet2@example.com", { delay: 100 });
    await newPage.locator("(//input[@name='pass'])[1]").type("1234567", { delay: 100 });
    await newPage.waitForTimeout(3000);

    //close facebook login popup window
    await newPage.close();
    //await page.bringToFront();
    console.log(await page1.title());
    console.log(await page1.url());
    //fill email and password in main page
    await page1.locator("//input[@name='email1']").type("admin@gmail.com", { delay: 100 });
    await page1.locator("//input[@name='password1']").type("123456", { delay: 100 });
   // await page1.locator("(//span[contains(text(),'Log in')])[2]").click();
    await page1.waitForTimeout(3000);



})