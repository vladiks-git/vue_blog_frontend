<template>
    <div class="top-nav">
        <ul>
            <router-link tag="li" to="/singig" exact>
                <a>Sing In</a>
            </router-link>
            <li><h2>My Blog</h2></li>
            <router-link tag="li" to="/registration" exact>
                <a>Registration</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "top-nav-bar"
    }
</script>

<style scoped>
    div{
        border-bottom: 1px solid #e5e5e5;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        padding: 10px;
        min-height: 60px;
    }
    li{
        list-style-type: none;
    }
    h2{
        font-family: "Playfair Display", Georgia, "Times New Roman", serif;
    }
</style>