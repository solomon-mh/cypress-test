<template>
    <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    label: string;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
}>();

const emit = defineEmits<{
    (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
    'storybook-button': true,
    'storybook-button--primary': props.primary,
    'storybook-button--secondary': !props.primary,
    [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
    backgroundColor: props.backgroundColor,
}));

const onClick = () => {
    emit('click', 1);
};
</script>

<style scoped>
.storybook-button {
    font-family: 'Arial', sans-serif;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.storybook-button--primary {
    background-color: #42b983;
    color: white;
}

.storybook-button--primary:hover {
    background-color: #379d71;
}

.storybook-button--secondary {
    background-color: #e7e7e7;
    color: #333;
}

.storybook-button--small {
    font-size: 12px;
}

.storybook-button--medium {
    font-size: 16px;
}

.storybook-button--large {
    font-size: 20px;
}

.storybook-button:hover {
    transform: scale(1.05);
}

.storybook-button:focus {
    outline: 2px solid #42b983;
}
</style>