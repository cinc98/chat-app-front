import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navToggle: false,
        message: [],
        activeUsers: [],
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
        addUsers(state, users) {
            state.activeUsers.length = 0;
            users.forEach((element) => {
                state.activeUsers.push(element);
            });
        },
        removeActiveUser(state, username) {
            state.activeUsers = state.activeUsers.filter((user) => user !== username);
        },
    },
    actions: {
    },
    modules: {
    },

});

Vue.mixin({
    data() {
        return {
            socket: '',
        };
    },
    methods: {
        conect(username) {
            this.socket = new WebSocket(`ws://localhost:8080/ChatWAR/ws/${username}`);
            this.socket.onopen = function (event) {
                console.log(event);
            };
            this.socket.onmessage = function (event) {
                console.log(event);
                this.addMessageToStore(event);
            };
        },

    },
});
