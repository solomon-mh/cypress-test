import vue from "@vitejs/plugin-vue";

export default {
  resolve: {
    alias: {
      "@": "/src", // Ensure this alias points to the src directory
    },
  },
  plugins: [vue()],
};
