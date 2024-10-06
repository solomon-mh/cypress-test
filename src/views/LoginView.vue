<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginView',
  components: {
    LoginForm,
  },
});
</script>

<style scoped>
.login {
  text-align: center;
  background-color: #f9f9f9;
  padding: 50px;
  border-radius: 10px;
  margin: auto;
}

img {
  height: 100px;
  margin-bottom: 20px;
}
</style>