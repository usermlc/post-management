<template>
    <div class="container mx-auto p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
            {{ isEdit ? 'Edit Post' : 'Create Post' }}
        </h2>
        <form @submit.prevent="handleSubmit" class="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <input v-model="post.title" placeholder="Title"
                class="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            <textarea v-model="post.body" placeholder="Body"
                class="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
            <button type="submit" class="w-full bg-green-500 text-white py-2 rounded-md shadow-md hover:bg-green-600">
                {{ isEdit ? 'Update' : 'Create' }}
            </button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['post', 'isEdit'],
    methods: {
        handleSubmit() {
            if (this.isEdit) {
                this.$emit('update-post', this.post);
            } else {
                this.$emit('create-post', this.post);
            }
        },
    },
};
</script>
