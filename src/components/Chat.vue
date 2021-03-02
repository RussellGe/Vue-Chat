<template>
    <div class="chat">
        <div v-for="post in posts" :key="post._id">
            {{post.text}}--{{post.createdAt}}
        </div>
        <p class="error" v-if="error">{{error}}</p>
    </div>
</template>
<script>
import PostService from '../PostService'
export default {
    name: 'Friend',
    data() {
        return {
            posts: [],
            error: '',
            text: ''
        }
    },
    async created() {
        try {
            this.posts = await PostService.getPosts()
        } catch(err) {
            this.error = err.message
        }
    }
}
</script>
<style scoped>
.friend{
    background: rgb(177, 54, 54);
}

</style>