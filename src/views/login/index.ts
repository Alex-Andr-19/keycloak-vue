// import "@/scss/index.scss";
import { Environment } from "@doc-types/environment";

import { createApp } from "vue";
import index from "./index.vue";
import UIStore from "@components/UI";

const environment = document.querySelector("#environment") as HTMLElement;

const app = createApp(index);
app.provide<Environment>("environment", JSON.parse(String(environment.textContent)));

UIStore.forEach((component) => {
    // @ts-ignore
    app.component(component.__name ?? component.name, component);
});

app.mount("#app");
