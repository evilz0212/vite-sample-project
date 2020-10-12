import { createStore } from "vuex"

import user from "./modules/user"
import countNumber from "./modules/count-number"

const Store = createStore({
    modules: {
        user,
        countNumber,
    },
    state() {
        return {}
    },
    mutations: {},
    actions: {},
    getters: {},
})

export function useStore() {
    return Store
}
