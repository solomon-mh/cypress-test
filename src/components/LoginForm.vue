<template>
    <div class="login-form">
        <Textbox v-model="email" placeholder="Email" />
        <Textbox v-model="password" placeholder="Password" type="password" />
        <Button label="Login" @click="login" />
    </div>
</template>

<script lang="ts" setup>
import Textbox from './Textbox.vue';
import Button from './Button.vue';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
    alert(`Logging in with Email: ${email.value} and Password: ${password.value}`);
};
</script>

<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
    margin: auto;
}
</style>