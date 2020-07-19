export default {

    actions: {

        async fetchPosts(ctx) {
            try {
                const res = await fetch('http://localhost:3000', {
                    headers: {"Content-Type": "application/json"}
                });
                const posts = await res.json();
                ctx.commit('updatePosts', posts)
            } catch (e) {
                console.log(e)
            }
        },

        async addPost(ctx, post) {
            try {
                const response = await fetch('http://localhost:3000/add', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(post)
                })
                const posts = await response.json()
                ctx.commit('updatePosts', posts)
            } catch (e) {
                console.log(e)
            }
        },

        async removePost(ctx, id) {
            try {
                const response = await fetch(`http://localhost:3000/${id}`, {
                    method: 'DELETE',
                    headers: {"Content-Type": "application/json"},
                })
                const posts = await response.json()
                ctx.commit('updatePosts', posts)
            } catch (e) {
                console.log(e)
            }

        }
    },


    mutations: {
        updatePosts(state, payload) {
            state.posts = payload
        }
    },


    state: {
        posts: []
    },


    getters: {
        getAllPosts(state) {
            return state.posts
        }
    }
}