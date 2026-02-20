const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const SecurePage = require('../pages/securePage');

test.describe('Login Tests on The Internet', () => {
  test('User should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = new SecurePage(page);

    // Navigate to login
    await loginPage.navigate('https://the-internet.herokuapp.com/login');

    // Perform login
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Verify success
    const message = await loginPage.getFlashMessage();
    expect(message).toContain('You logged into a secure area!');

    // Logout
    await securePage.logout();
    expect(await loginPage.getFlashMessage()).toContain('You logged out of the secure area!');
  });
});