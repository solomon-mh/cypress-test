<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    LoginForm,
  },
});
</script>

<style scoped>
.home {
  text-align: center;
}

img {
  height: 100px;
  margin-bottom: 20px;
}
</style>