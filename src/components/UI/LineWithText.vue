<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    console.log("LineWithText is mounted.")
})
</script>

<template>
    <div class="LineWithText">
        <div class="LineWithText__line"></div>
        <span class="LineWithText__text"><slot></slot></span>
        <div class="LineWithText__line"></div>
    </div>
</template>

<style scoped lang="scss">
.LineWithText {
    display: flex;
    align-items: center;
    gap: 12px;

    &__line {
        width: 100%;
        height: 1px;

        background-color: $border-primary;
    }

    &__text {
        color: $text-tetriary;

        @include XS_Regular;
    }
}
</style>