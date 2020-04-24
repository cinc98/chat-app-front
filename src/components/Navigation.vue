<template>
  <v-sheet
    height="100%"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-navigation-drawer
      :value="drawer"
      absolute
      temporary
      @input="loging"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>username</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="logout" block color="blue darken-2 white--text">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
      <Chat/>
      <ActiveUsers/>

  </v-sheet>
</template>

<script>
import axios from 'axios';
import Chat from './Chat.vue';
import ActiveUsers from './ActiveUsers.vue';


export default {
    data() {
        return {
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' },
            ],
        };
    },
    components: {
        Chat,
        ActiveUsers,
    },
    methods: {
        loging(e) {
            if (e === false) {
                this.$store.commit('changeState');
            }
        },
        logout(e) {
            e.preventDefault();
            axios.delete(`http://localhost:8080/ChatWAR/rest/users/loggedIn/${sessionStorage.getItem('username')}`)
                .then((response) => {
                    console.log(response);
                    this.$store.commit('changeState');
                    this.$store.commit('removeActiveUser', sessionStorage.getItem('username'));
                    sessionStorage.removeItem('username');

                    this.$router.push('/');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    computed: {
        drawer() {
            return this.$store.state.navToggle;
        },
    },
};
</script>

<style>

</style>
