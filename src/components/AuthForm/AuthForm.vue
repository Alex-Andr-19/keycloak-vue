<script setup lang="ts">
import { useLogin } from "@/hooks";

import { ref } from "vue";

const { urls, forms, getImage, getUrl, social } = useLogin();

const formValue = ref({
    email: "",
    password: "",
});

const showPassword = ref<boolean>(false);

console.log(social);
</script>

<template>
    <div class="AuthForm">
        <div class="AuthForm__titleRow">
            <h1 class="AuthForm__titleRow__text">Вход</h1>

            <!-- <router-link to="#"> -->
            <a href="#">
                <div class="AuthForm__titleRow__regButton">Зарегистрироваться</div>
            </a>
        </div>

        <form :action="getUrl(urls.loginAction)" method="post" class="AuthForm__form">
            <!-- type="email" -->
            <MyInput
                v-model="formValue.email"
                title="E-mail"
                :inputProps="{ name: 'username' }"
            />
            <MyInput
                v-model="formValue.email"
                title="Пароль"
                :type="showPassword ? 'text' : 'password'"
                :inputProps="{ name: 'password' }"
            >
                <template #leftFunctionalBlock>
                    <MyCheckbox v-model="showPassword" answer="Посмотреть пароль" />
                </template>
                <template #rightFunctionalBlock>
                    <!-- <router-link to="#">Восстановить пароль</router-link> -->
                    <a href="#">Восстановить пароль</a>
                </template>
            </MyInput>

            <input
                type="hidden"
                id="id-hidden-input"
                name="credentialId"
                :value="forms.selectedCredential"
            />

            <MyButton type="submit"> Войти </MyButton>
        </form>

        <LineWithText>или</LineWithText>
 
        <div class="AuthForm__authList">
            <a v-for="el in social" :href="el.loginUrl">
                <img :src="getImage(`/${el.alias === 'esia' ? el.alias.toUpperCase() : el.alias}.svg`)" :alt="el.displayName" />
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.AuthForm {
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: 100%;
    max-width: 465px;

    &__titleRow {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    &__authList {
        display: flex;
        justify-content: center;
        gap: 16px;

        cursor: pointer;
    }
}
</style>
