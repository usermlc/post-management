const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchPosts() {
    try {
        const response = await fetch(`${BASE_URL}?_limit=10`);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createPost(post) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),
        });
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updatePost(post) {
    try {
        const response = await fetch(`${BASE_URL}/${post.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),
        });
        if (!response.ok) {
            throw new Error('Failed to update post');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function deletePost(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        return id;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
