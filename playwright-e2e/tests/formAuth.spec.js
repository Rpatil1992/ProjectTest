const { test, expect } = require('@playwright/test');
const FormAuthPage = require('../pages/formAuthPage');

test.describe('Form Authentication Tests', () => {

  test('Valid login', async ({ page }) => {
    const formAuth = new FormAuthPage(page);

    await formAuth.navigate('https://the-internet.herokuapp.com/login');
    await formAuth.login('tomsmith', 'SuperSecretPassword!');

    const msg = await formAuth.getFlashMessage();
    expect(msg).toContain('You logged into a secure area!');
  });

  test('Invalid login', async ({ page }) => {
    const formAuth = new FormAuthPage(page);

    await formAuth.navigate('https://the-internet.herokuapp.com/login');
    await formAuth.login('wrongUser', 'wrongPass');

    const msg = await formAuth.getFlashMessage();
    expect(msg).toContain('Your username is invalid!');
  });

});