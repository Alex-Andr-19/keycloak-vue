<script setup lang="ts">
import { useLogin } from "@/hooks";
import { computed, ref, watch } from "vue";

const props = withDefaults(
    defineProps<{
        /**
         * @param answer        - Answer text
         */
        answer: string;
        /**
         * @param modelValue    - v-model prop
         */
        modelValue: boolean | null;
        /**
         * @param disabled      - Is disabled
         */
        disabled: boolean;
        /**
         * @param nullable      - Can component has value null
         */
        nullable: boolean;
    }>(),
    {
        disabled: false,
        nullable: false,
    },
);

const emit = defineEmits<{
    "update:modelValue": [value: boolean | null];
}>();

const state = computed(() => {
    let res = "";
    if (props.disabled) res += "disabled";
    if (props.modelValue === false) res += " default";
    if (props.modelValue === true) res += " selected";
    if (props.modelValue === null) res += " intemediate";
    
    return res;
});

const { getImage } = useLogin();

const localValue = ref<boolean | null>(props.modelValue);
function toggle() {
    if (!props.nullable) {
        console.log("herre!!1");
        localValue.value = !localValue.value;
    } else {
        /**
         * if localValue is true switch value to true
         * if localValue is null switch value to false
         * else switch to false
         */
        localValue.value = localValue.value ? null : localValue.value === null ? false : true;
    }
}

watch(
    () => localValue.value,
    () => {
        emit("update:modelValue", localValue.value);
    },
);
</script>

<template>
    <label @click="toggle" class="MyCheckbox" :class="state">
        <input
            type="checkbox"
            @click.stop
            @keydown.space.stop="toggle"
            :value="localValue"
            class="MyCheckbox__input"
        />
        <div class="MyCheckbox__box" :class="{ selected: localValue !== false }">
            <img v-if="localValue !== null" class="MyCheckbox__box__img" :src="getImage('/default/check.svg')" alt="check" />
            <img v-else class="MyCheckbox__box__img" :src="getImage('/default/dash.svg')" alt="check" />
        </div>
        <span class="MyCheckbox__text">{{ answer }}</span>

        <div v-if="disabled" class="MyCheckbox__fog"></div>
    </label>
</template>

<style scoped lang="scss">
.MyCheckbox {
    position: relative;

    display: flex;
    align-items: center;
    gap: 12px;

    width: max-content;
    max-width: 100%;

    cursor: pointer;

    $self: #{&};

    &.disabled {
        pointer-events: none;
    }

    &.default {
        &:hover {
            #{$self} {
                &__box {
                    background-color: $checkbox-default-hover;

                    &__img {
                        opacity: 1;
                    }
                }
            }
        }

        &:active {
            #{$self} {
                &__box {
                    background-color: $checkbox-default-active;

                    &__img {
                        opacity: 1;
                    }
                }
            }
        }

        #{$self}__input:focus {
            + #{$self}__box {
                background-color: $checkbox-default-active;
                border-color: $checkbox-border-active;
            }

            + #{$self}__box #{$self}__box__img {
                opacity: 1;
            }
        }

        &.disabled {
            #{$self} {
                &__box {
                    background-color: $checkbox-default-disabled;

                    &__img {
                        opacity: 0;
                    }
                }
            }
        }
    }

    &.selected {
        #{$self}__input:focus {
            + #{$self}__box {
                border-color: $checkbox-default;
            }

            + #{$self}__box #{$self}__box__img {
                opacity: 1;
            }
        }
    }

    &__input {
        position: absolute;
        top: 0;
        left: 0;

        width: 0;
        height: 0;

        opacity: 0;
    }

    &__box {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $checkbox-default;
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 6px;

        transition:
            background-color 0.3s,
            border-color 0.3s;

        @include setSize(24px);

        &.selected {
            background-color: $checkbox-selected;
        }
        @include innerStyleWithMods(".selected") {
            &__img {
                opacity: 1;
            }
        }

        &__img {
            opacity: 0;

            transition: opacity 0.3s;
        }
    }

    &__text {
        @include S_Regular;
    }

    &__fog {
        position: absolute;
        inset: 0;

        background-color: #fff8;
    }
}
</style>
