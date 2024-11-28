<template>
    <div class="container mx-auto p-6 space-y-6">
        <div v-if="showForm" class="p-4 bg-gray-100 rounded-lg">
            <PostForm :post="currentPost" :isEdit="isEdit" @create-post="createPost" @update-post="updatePost" />
        </div>
        <div>
            <PostList :posts="posts" @edit-post="editPost" @delete-post="deletePostFromList" />
        </div>
        <div v-if="!showForm" class="text-center">
            <button @click="showForm = true"
                class="bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600">
                Create New Post
            </button>
        </div>
    </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import PostForm from '../components/PostForm.vue';

export default {
    components: { PostList, PostForm },
    data() {
        return {
            posts: [],
            showForm: false,
            currentPost: { title: '', body: '' },
            isEdit: false,
        };
    },
    created() {
        this.fetchPosts();
    },
    methods: {
        fetchPosts() {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                .then((res) => res.json())
                .then((data) => {
                    this.posts = data;
                });
        },
        createPost(post) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post),
            })
                .then((res) => res.json())
                .then((newPost) => {
                    this.posts.push(newPost);
                    this.resetForm();
                });
        },
        updatePost(post) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post),
            })
                .then((res) => res.json())
                .then((updatedPost) => {
                    const index = this.posts.findIndex((p) => p.id === updatedPost.id);
                    if (index !== -1) {
                        this.posts[index] = updatedPost;
                    }
                    this.resetForm();
                });
        },
        deletePostFromList(id) {
            this.posts = this.posts.filter((post) => post.id !== id);
        },
        editPost(post) {
            this.currentPost = { ...post };
            this.isEdit = true;
            this.showForm = true;
        },
        resetForm() {
            this.currentPost = { title: '', body: '' };
            this.isEdit = false;
            this.showForm = false;
        },
    },
};
</script>
