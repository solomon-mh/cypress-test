<template>
    <nav>
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Login</router-link>
    </nav>
</template>

<style scoped>
nav {
    padding: 1rem;
    background-color: #2c3e50;
    text-align: center;
    color: white;
}

nav a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
    font-size: 18px;
}

nav a:hover {
    color: #42b983;
}

nav a.router-link-exact-active {
    color: #42b983;
    font-weight: bold;
}
</style>