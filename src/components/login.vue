<template>
    <div class="block-l">
        <div class="block-login">
            <form @submit.prevent="loginUser">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                </div>
                <div v-if="!isReg">
                    <p>Cant find user!</p>
                </div>
                <button type="submit" class="btn btn-primary">Sing in</button>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                email: '',
                password: '',
                isReg: true
            }
        },
        methods:{
            async loginUser(){
                try{
                    const response = await fetch('http://localhost:3000/user/login', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({email: this.email,
                        password: this.password})
                    })
                    const result = await response.json()
                    if(!result.auth){
                        this.isReg = false
                    }else {
                        localStorage.setItem('user', JSON.stringify(result.user))
                        localStorage.setItem('jwt', JSON.stringify(result.token))
                        this.$router.push('/')
                    }
                }catch (e) {
                    console.log(e)
                }
            }
        },

    }
</script>

<style scoped>
    .block-l{
        display: flex;
        justify-content: center;
    }
    .block-login{
        width: 500px;
    }
</style>