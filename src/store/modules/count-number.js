// state
export const state = {
    count: 1,
};

// action
export const actions = {
    multCount({ state, commit }, data) {
        let tempNumber = state.count * data;
        commit("addCount", tempNumber);
    },
};

// mutation
export const mutations = {
    addCount(state, data) {
        state.count += data;
    },
};

// getter
export const getters = {
    getPowerCount: (state) => {
        return Math.pow(state.count, 2);
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
