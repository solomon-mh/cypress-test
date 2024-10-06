<template>
    <input :type="type" :placeholder="placeholder" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" class="storybook-textbox" />
</template>

<script lang="ts" setup>
const props = defineProps<{
    modelValue: string;
    placeholder?: string;
    type?: string;
}>();

defineEmits(['update:modelValue']);
</script>

<style scoped>
.storybook-textbox {
    padding: 0.75rem;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
    transition: border-color 0.3s ease;
}

.storybook-textbox:focus {
    border-color: #42b983;
    outline: none;
}
</style>