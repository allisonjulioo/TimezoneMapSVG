import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/roboto-font/roboto-font.css";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import "quasar/src/css/index.sass";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(Quasar, { plugins: {} }).use(createPinia()).mount("#app");
