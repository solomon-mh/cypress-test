<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    HelloWorld
  }
});
</script>

<style scoped>
.about {
  padding: 30px;
  font-size: 20px;
  background-color: #f1f1f1;
}
</style>