<template>
    <nav>
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Login</router-link>
    </nav>
</template>

<script lang="ts" setup>
</script>

<style scoped>
nav {
    padding: 1rem;
    background-color: #42b983;
}

nav a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
}

nav a.router-link-exact-active {
    margin: 0 1rem;
    color: red;
    text-decoration: none;
    font-weight: bold;
}
</style>