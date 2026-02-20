const BasePage = require('./basePage');

class DropdownPage extends BasePage {
  constructor(page) {
    super(page);
    this.dropdown = '#dropdown';
  }

  async selectOptionByText(text) {
    await this.page.selectOption(this.dropdown, { label: text });
  }

  async getSelectedValue() {
    const val = await this.page.$eval(this.dropdown, el => el.value);
    return val;
  }
}

module.exports = DropdownPage;