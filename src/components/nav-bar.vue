<template>
    <div class="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
            <router-link class="navbar-brand text-info" tag="a" to="/" exact>My App</router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link class="nav-item" tag="li" to="/about" active-class="active" exact>
                        <a class="nav-link text-info">About us</a>
                    </router-link>
                    <router-link class="nav-item" tag="li" to="/add" active-class="active" exact>
                        <a class="nav-link text-info">Add post</a>
                    </router-link>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "nav-bar"
    }
</script>

<style scoped>
    .nav-bar{
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
</style>