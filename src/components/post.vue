<template>
    <div>
        <div v-for="post in getAllPosts" :key="post.id">
            <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title">{{post.title}}</h5>
                    <p class="card-text">{{post.text}}</p>
                    <p class="card-text">Автор - {{post.author}}</p>
                    <a href="#" class="btn btn-primary">Open</a>
                    <button type="submit" class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: mapGetters(['getAllPosts']),
        methods: {
            ...mapActions(['fetchPosts', 'removePost']),
            async deletePost(id){
                await this.removePost(id);
                await this.fetchPosts();
            }
        },
        async mounted() {
           await this.fetchPosts();
        },
    }
</script>

<style scoped>
    .card {
        margin-left: 5rem;
        margin-top: 3rem;
    }
</style>