class IframePage {
    constructor(page) {
        this.page = page;
        this.editorFrame = page.frameLocator('#mce_0_ifr');
        this.editorBody = this.editorFrame.locator('body');
    }

    async open() {
        await this.page.goto('https://the-internet.herokuapp.com/iframe');
    }

    async enterText(text) {
        await this.editorBody.fill(text);
    }

    async getText() {
        return this.editorBody.innerText();
    }
}

module.exports = IframePage;
