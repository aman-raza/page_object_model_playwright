const { test, expect } = require('@playwright/test');
const ApiPage = require('../pages/ApiPage');

test('get a post from the API', async ({ request }) => {
    const apiPage = new ApiPage(request);

    const response = await apiPage.getPost(1);

    expect(response.status()).toBe(200);

    const post = await response.json();
    expect(post.id).toBe(1);
    expect(post.title).toBeTruthy();
});
