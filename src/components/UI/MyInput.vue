<script setup lang="ts">
import { computed, ref, useSlots, watch } from "vue";

const slots = useSlots();

const props = withDefaults(
    defineProps<{
        title: string;
        type: InputTypes;

        inputProps: Object;

        modelValue: string | number;
    }>(),
    {
        title: "Title",
        type: "text",
    },
);

const emit = defineEmits<{
    "update:modelValue": [value: string | number];
}>();

const localModel = ref(props.modelValue);

watch(
    () => localModel.value,
    () => {
        emit("update:modelValue", localModel.value);
    },
);

const autocomplete = computed(() => {
    if (props.type === "password") return "current-password";
    return props.type;
});
</script>

<template>
    <div class="MyInput">
        <div class="MyInput__mainBlock">
            <span class="MyInput__mainBlock__title">
                {{ title }}
            </span>
            <input
                v-model="localModel"
                :type="type"
                :autocomplete="autocomplete"
                class="MyInput__mainBlock__input"

                v-bind="inputProps"
            />
        </div>
        <div
            v-if="slots.leftFunctionalBlock || slots.rightFunctionalBlock"
            class="MyInput__functionalRow"
        >
            <slot name="leftFunctionalBlock"></slot>
            <slot name="rightFunctionalBlock"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.MyInput {
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 100%;

    &__mainBlock {
        display: flex;
        flex-direction: column;
        gap: 8px;

        width: 100%;

        &__title {
            @include S_Medium;
        }

        &__input {
            width: 100%;

            padding: 12px 20px;

            border: 1px solid $border-primary;
            border-radius: 8px;
            box-shadow: 0 0 0 0 rgba($border-action, 0.3);

            outline: none;

            transition:
                border-color 0.3s,
                box-shadow 0.3s;

            @include S_Regular;

            &:focus {
                border-color: $border-action;
                box-shadow: 0 0 4px 1px rgba($border-action, 0.3);
            }
        }
    }

    &__functionalRow {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
    }
}
</style>
