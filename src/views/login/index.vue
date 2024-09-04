<script setup lang="ts">
import { useLogin } from "@/hooks";
import AuthForm from "@components/AuthForm/AuthForm.vue";
import { onMounted } from "vue";

const { getImage } = useLogin();

onMounted(() => {
    console.log("Mount AuthPage.");
});
</script>

<template>
    <div class="AuthPage">
        <div class="AuthPage__infoBlock">
            <img :src="getImage('/authImg.png')" alt="" class="AuthPage__infoBlock__img" />

            <div class="AuthPage__infoBlock__textBlock">
                <div class="AuthPage__infoBlock__textBlock__mainText">
                    <h1 class="AuthPage__infoBlock__textBlock__mainText__title">
                        Экосистема городских сервисов Нижнего Новгорода
                    </h1>
                    <span class="AuthPage__infoBlock__textBlock__mainText__description">
                        Единая точка входа во все сервисы города
                    </span>
                </div>

                <!-- <router-link
                    to="#"
                > -->
                <a href="#" target="_blank" class="AuthPage__infoBlock__textBlock__FAQ">
                    Что такое единая точка входа?
                </a>
            </div>
        </div>

        <div class="AuthPage__formBlock">
            <AuthForm />
        </div>
    </div>
</template>

<style scoped lang="scss" src="./style.scss"></style>
