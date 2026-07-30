const { test, expect } = require('@playwright/test');

test.use({ viewport: { width: 1200, height: 600 } });

test('Valid Login', async function ({ page }) {
  
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/i);

    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);

    await page.getByPlaceholder('Username').type('Admin',{ delay: 100 });
    await page.getByPlaceholder('Password').type('admin123',{ delay: 100 });
    await page.locator('//button[@type="submit"]').click();


    // const usernameInput = page.locator('input[name="username"]');
    // const passwordInput = page.locator('input[name="password"]');
    // const loginButton = page.locator('button[type="submit"]');
    // await usernameInput.fill('Admin', { delay: 100 });
    // await passwordInput.fill('admin123', { delay: 100 });
    // await loginButton.click();

    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/dashboard/);



    await expect(page.locator('.oxd-topbar-header-breadcrumb')).toContainText('Dashboard');
    // await expect(page.locator('.oxd-userdropdown-name')).toContainText('Test 40 B');
    // await expect(page.locator('.oxd-userdropdown-name')).toBeVisible();
    // await expect(page.locator('.oxd-userdropdown-name')).toHaveText('Test 40 B');
    // await expect(page.locator('.oxd-userdropdown-name')).toHaveCount(1);
    await page.locator('.oxd-userdropdown-name').evaluate(el => {
        el.textContent = 'Ranjeet';
    });
    await expect(page.locator('.oxd-userdropdown-name')).toHaveAttribute('class', 'oxd-userdropdown-name');
    await expect(page.locator('.oxd-userdropdown-name')).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(page.locator('.oxd-userdropdown-name')).toHaveCSS('font-size', '12px');
    await expect(page.locator('.oxd-userdropdown-name')).toHaveCSS('font-weight', '600');


    await page.getByAltText('profile picture').first().click();
    await page.getByText("Logout").click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/login/);
    

});