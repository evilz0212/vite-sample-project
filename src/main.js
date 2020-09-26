import "/@/styles/index.sass";

import { createApp } from "vue";
import { useStore } from "/@/store";
import components from "/@/components";
import router from "/@/router";
import App from "./App.vue";

const Vue = createApp(App);

Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
});
Vue.use(router);
Vue.use(useStore);
Vue.mount("#app");
