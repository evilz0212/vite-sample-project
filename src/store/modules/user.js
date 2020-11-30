import { router } from "/@/router"

// state
export const state = {
	name: null,
	token: null,
	role: null,
}

// action
export const actions = {
	login({ state, commit }, { username, token }) {
		commit("setUser", { username, token })
	},
	logout({ state, commit }, data) {
		commit("clearUser")
	},
}

// mutation
export const mutations = {
	setUser(state, data) {
		state.name = data.username
		state.token = data.token
		state.role = "admin"
	},
	clearUser(state, data) {
		state.name = null
		state.token = null
		state.role = null
	},
}

// getter
export const getters = {}

export default {
	state,
	actions,
	mutations,
	getters,
}
