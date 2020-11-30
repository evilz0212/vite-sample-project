import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

import user from "./modules/user"
import coin from "./modules/coin"

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
		coin,
	},
	plugins: [vuexPersisted],
})

export function useStore() {
	return Store
}
