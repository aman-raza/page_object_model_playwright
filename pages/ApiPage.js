class ApiPage {
    constructor(request) {
        this.request = request;
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    async getPost(postId) {
        return this.request.get(`${this.baseUrl}/posts/${postId}`);
    }
}

module.exports = ApiPage;
