const { test, expect } = require('@playwright/test');

test("Select Values From Dropdown", async ({ page }) => {


    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption({label:"Goa"});
    await page.waitForTimeout(3000);
    await page.locator("#state").selectOption({value:"Maharashtra"});
    await page.waitForTimeout(3000);
    await page.locator("#state").selectOption({index:2});
    await page.waitForTimeout(3000);
    
    
    const value = await page.locator("#state").textContent();
    console.log("Selected value is: " + value);
    await expect(value.includes("Maharashtra")).toBeTruthy();


    const values = await page.locator("#state").evaluateAll((options) => {
        return options.map((option) => option.value);
    });
    console.log("All values are: " + values);

    let ddstatus = false;
    let state = await page.$("#state");
    let allElements = await state.$$("option");
    for (let i = 0; i < allElements.length; i++) {
        let element = await allElements[i];
        let value = await element.textContent();
        console.log("Value form dropdown using for loop: " + value);

        if (value.includes("Maharashtra")) {
            console.log("Found Maharashtra in the dropdown");
            ddstatus = true;
            break;
        }
    }

    await expect(ddstatus).toBeTruthy();
    await page.waitForTimeout(3000);
    await page.locator("#hobbies").selectOption(["Playing","Swimming"]);
    await page.waitForTimeout(3000);

})

// /https://playwright.dev/docs/input#select-options
//https://playwright.dev/docs/input#checkboxes-and-radio-buttons