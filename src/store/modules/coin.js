// state
export const state = {
	coinList: null,
	vs_currency: "USD",
	time: null,
}

// action
export const actions = {
	saveCoinList({ state, commit }, data) {
		const q_time = new Date().toLocaleString()
		commit("setTime", q_time)
		commit("setCoin", data)
	},
}

// mutation
export const mutations = {
	setCoin(state, data) {
		state.coinList = data
	},
	setTime(state, data) {
		state.time = data
	},
}

// getter
export const getters = {
	// getCoin: (state) => {
	// 	return state.coinList
	// },
}

export default {
	state,
	actions,
	mutations,
	getters,
}
