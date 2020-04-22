import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navToggle: false,
    },
    getters: {

    },
    mutations: {
        changeState(state) {
            state.navToggle = !state.navToggle;
        },
    },
    actions: {
    },
    modules: {
    },
});
