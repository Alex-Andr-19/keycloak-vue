<script setup lang="ts">
const props = withDefaults(defineProps<{
    disabled: boolean;
}>(), {
    disabled: false,
});
</script>

<template>
    <button :disabled="disabled" class="MyButton">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.MyButton {
    padding: 14px 32px;

    background-color: $background-action;
    border-radius: 8px;

    color: $text-secondary;

    opacity: 1;
    cursor: pointer;

    transition: background-color .3s, opacity .3s;
    
    @include S_Regular();

    @include hover() {
        background-color: $background-action-hover;
    }

    &:active,
    &:focus-visible {
        background-color: $background-action-active;
    }

    &:disabled {
        opacity: .56;
        pointer-events: none;
    }
}
</style>