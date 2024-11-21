const baseUrl = 'https://jsonplaceholder.typicode.com';
const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users: {
        base: users,
        byId: (userId: number) => `${users}/${userId}`
    },
    posts: {
        base: posts,
        byId: (postId: number) => `${posts}/${postId}`
    },
    comments: {
        base: comments,
        byId: (commentId: number) => `${comments}/${commentId}`
    }
};

export {baseUrl, urls};