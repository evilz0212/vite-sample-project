import { createStore } from "vuex";

import countNumber from "./modules/count-number";

const Store = createStore({
    modules: {
        countNumber,
    },
    state() {
        return {};
    },
    mutations: {},
    actions: {},
    getters: {},
});

export function useStore() {
    return Store;
}
