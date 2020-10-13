import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

import user from "./modules/user"
import countNumber from "./modules/count-number"

// 保存 Vuex Store 在瀏覽器中
const vuexPersisted = new createPersistedState({
    key: "vuexStore",
    storage: window.localStorage,
    reducer: (state) => ({
        // 指定保存 user module
        user: state.user,
    }),
})

const Store = createStore({
    modules: {
        user,
        countNumber,
    },
    plugins: [vuexPersisted],
})

export function useStore() {
    return Store
}
