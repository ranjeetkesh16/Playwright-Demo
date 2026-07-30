const { test, expect } = require('@playwright/test');

test("Zoho Form Test", async ({ page }) => {
    await page.goto("https://www.zoho.com/commerce/free-demo.html", {
        waitUntil: "domcontentloaded",
    });

    const dropdown = page.locator("#zcf_address_country");
    await dropdown.selectOption("India");
    await expect(dropdown).toHaveValue("India");    

    addEventListener("change", (event) => {
        console.log("Selected value is: " + event.target.value);
    });


})