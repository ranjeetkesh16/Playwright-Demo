const {test, expect }  = require('@playwright/test');

test('Keyboard Event Test', async ({page}) => { 


    await page.goto('https://google.com/');

    await page.locator('textarea[name="q"]').type('Playwright testing'); 
    await page.waitForTimeout(3000);
    // await page.keyboard.press('Control+A');
    // await page.keyboard.press("Control+C");
    // await page.waitForTimeout(3000);
    // await page.keyboard.press("Backspace");
    // await page.waitForTimeout(3000);
    // await page.keyboard.press("Control+V");

    
    await page.keyboard.down('Shift');
    for (let i = 0; i < 'testing'.length; i++)     await page.keyboard.press('ArrowLeft');
    
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(3000);
 
    

});