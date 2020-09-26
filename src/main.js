import "/@/styles/index.sass";

import { createApp } from "vue";
import components from "/@/components";
import App from "./App.vue";

const Vue = createApp(App);

Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
});
Vue.mount("#app");
