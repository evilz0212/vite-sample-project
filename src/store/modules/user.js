import { router } from "/@/router"

// state
export const state = {
    name: null,
    token: null,
    role: null,
}

// action
export const actions = {
    login({ state, commit }, { username, password }) {
        state.name = username
        state.token = "user-token"
        state.role = "admin"
        router.push("/contact")
    },
}

// mutation
export const mutations = {}

// getter
export const getters = {}

export default {
    state,
    actions,
    mutations,
    getters,
}
