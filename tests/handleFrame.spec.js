const {test, expect, devices} = require('@playwright/test');

test('Handle Frame', async ({ page }) => {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    await page.frameLocator("//frame[@name='packageListFrame']").locator("//a[text()='java.applet']").click();
    await page.frameLocator("//frame[@name='packageFrame']").locator("//a[text()='Applet']").click();
    const text = await page.frameLocator("//frame[@name='classFrame']").locator("//h2[.='Class Applet']").textContent();
    console.log(text);
    expect(text).toContain('Class Applet');

    // const frame1 = page.frameLocator("//frame[@name='packageListFrame']");
    // await frame1.locator("//a[text()='java.applet']").click();
     await page.pause();
})