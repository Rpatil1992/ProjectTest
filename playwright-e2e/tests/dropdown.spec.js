const { test, expect } = require('@playwright/test');
const DropdownPage = require('../pages/dropdownPage');

test.describe('Dropdown Tests', () => {

  test('Select Option 1', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.navigate('https://the-internet.herokuapp.com/dropdown');
    await dropdownPage.selectOptionByText('Option 1');

    const selected = await dropdownPage.getSelectedValue();
    expect(selected).toBe('1');
  });

  test('Select Option 2', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.navigate('https://the-internet.herokuapp.com/dropdown');
    await dropdownPage.selectOptionByText('Option 2');

    const selected = await dropdownPage.getSelectedValue();
    expect(selected).toBe('2');
  });

});