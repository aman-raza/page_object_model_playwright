class HomePage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.items = page.locator('.inventory_item');
  }

  async isDisplayed() {
    return this.title.isVisible();
  }

  async getItemCount() {
    return this.items.count();
  }
}

module.exports = HomePage;
