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
    padding: 0.5rem;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
}
</style>