const {test, expect} = require('@playwright/test');

test('File Upload Test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload'); 
    // await page.locator("#file-upload").setInputFiles('C:/Users/DELL/Downloads/11.12.2025_18.28.06_REC.png');
    // await page.waitForTimeout(3000);
    // await page.locator('#file-submit').click();
    // await page.waitForTimeout(3000);
    // await expect(page.locator('//h3')).toHaveText('File Uploaded!');

    const fileChooserPromise =  page.waitForEvent('filechooser');
    await page.locator('#file-upload').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/DELL/Downloads/11.12.2025_18.28.06_REC.png');
    await page.waitForTimeout(3000);
    await page.locator('#file-submit').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('//h3')).toHaveText('File Uploaded!');
});

//https://playwright.dev/docs/input#upload-files