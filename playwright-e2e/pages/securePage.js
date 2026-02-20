const BasePage = require('./basePage');

class SecurePage extends BasePage {
  constructor(page) {
    super(page);
    this.logoutButton = 'a[href="/logout"]';
  }

  async logout() {
    await this.click(this.logoutButton);
  }
}

module.exports = SecurePage;