const { test, expect } = require('@playwright/test');
const IframePage = require('../pages/IframePage');

test('enter text inside an iframe editor', async ({ page }) => {
    const iframePage = new IframePage(page);
    const message = 'Playwright iframe test';

    await iframePage.open();
    await iframePage.enterText(message);

    await expect(iframePage.editorBody).toHaveText(message);
});
