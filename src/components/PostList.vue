<template>
    <div class="container mx-auto p-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Posts</h1>
        <div class="overflow-x-auto rounded-lg shadow-lg">
            <table class="min-w-full bg-white border-collapse">
                <thead class="bg-gray-200 text-gray-600 text-sm leading-normal">
                    <tr>
                        <th class="py-3 px-6 text-left">ID</th>
                        <th class="py-3 px-6 text-left">Title</th>
                        <th class="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                    <tr v-for="post in posts" :key="post.id" class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6">{{ post.id }}</td>
                        <td class="py-3 px-6">{{ post.title }}</td>
                        <td class="py-3 px-6 text-center">
                            <button @click="$emit('edit-post', post)"
                                class="bg-blue-500 text-white py-1 px-4 rounded-md shadow-md hover:bg-blue-600 mr-2">
                                Edit
                            </button>
                            <button @click="deletePost(post.id)"
                                class="bg-red-500 text-white py-1 px-4 rounded-md shadow-md hover:bg-red-600">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ['posts'],
    methods: {
        deletePost(id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            }).then(() => {
                this.$emit('delete-post', id);
            });
        },
    },
};
</script>
