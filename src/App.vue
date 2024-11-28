<template>
    <div class="min-h-screen bg-gray-100 p-6">
        <div class="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
            <h1 class="text-2xl font-bold text-center mb-6">CRUD Application with Vue 3</h1>

            <div v-if="showForm" class="mb-6">
                <PostForm :post="currentPost" :isEdit="isEdit" @create-post="handleCreatePost"
                    @update-post="handleUpdatePost" />
            </div>

            <div v-else class="text-right mb-6">
                <button @click="showForm = true" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Create New Post
                </button>
            </div>

            <PostList :posts="posts" @edit-post="editPost" @delete-post="deletePost" />
        </div>
    </div>
</template>

<script>
import { fetchPosts, createPost, updatePost, deletePost } from './scripts/postLogic';
import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';

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
        fetchPosts().then(data => {
            this.posts = data;
        }).catch(err => {
            console.error('Error fetching posts:', err);
        });
    },
    methods: {
        handleCreatePost(post) {
            createPost(post).then(newPost => {
                this.posts.push(newPost);
                this.resetForm();
            }).catch(err => {
                console.error('Error creating post:', err);
            });
        },
        handleUpdatePost(post) {
            updatePost(post).then(updatedPost => {
                const index = this.posts.findIndex(p => p.id === updatedPost.id);
                if (index !== -1) {
                    this.posts[index] = updatedPost;
                }
                this.resetForm();
            }).catch(err => {
                console.error('Error updating post:', err);
            });
        },
        deletePost(id) {
            deletePost(id).then(() => {
                this.posts = this.posts.filter(post => post.id !== id);
            }).catch(err => {
                console.error('Error deleting post:', err);
            });
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
