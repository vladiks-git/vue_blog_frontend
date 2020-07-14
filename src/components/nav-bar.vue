<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <router-link class="navbar-brand text-info" tag="a" to="/" exact>My App</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" tag="li" to="/about" active-class="active" exact>
                    <a class="nav-link text-info">About us</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "nav-bar"
    }
</script>

<style scoped>

</style>