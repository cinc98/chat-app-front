import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navToggle: false,
        message: [],
        activeUsers: [],
        registeredUsers: [],
    },
    getters: {

    },
    mutations: {
        changeState(state) {
            state.navToggle = !state.navToggle;
        },
        addMessage(state, msg) {
            state.message.push(msg);
        },
        addMessages(state, messages) {
            messages.forEach((msg) => {
                state.message.push(JSON.stringify(msg));
            });
        },
        fetchRegisteredUsers(state, users) {
            users.forEach((user) => {
                state.registeredUsers.push(user);
            });
        },
        deleteMessages(state) {
            state.message.length = 0;
        },
        addUsers(state, users) {
            state.activeUsers.length = 0;
            users.forEach((element) => {
                state.activeUsers.push(element.slice(1));
            });
        },
        removeActiveUser(state, username) {
            state.activeUsers = state.activeUsers.filter((user) => user !== username);
        },
        removeRegisteredUsers(state) {
            state.registeredUsers.length = 0;
        },
    },
    actions: {
    },
    modules: {
    },

});
