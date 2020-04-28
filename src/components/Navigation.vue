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
          <v-list-item-title>{{user}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          link
          @click="toggleDialogClick()"
        >
          <v-list-item-icon>
            <v-icon>people</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Registered users</v-list-item-title>
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
      <registered-users-dialog v-bind:dialogToggle="this.toggleDialogClick" v-bind:show="this.dialogToggle" />

  </v-sheet>
</template>

<script>
import axios from 'axios';
import Chat from './Chat.vue';
import ActiveUsers from './ActiveUsers.vue';
import RegisteredUsersDialog from './RegisteredUsersDialog.vue';

export default {
    data() {
        return {
            dialogToggle: false,

        };
    },
    components: {
        Chat,
        ActiveUsers,
        RegisteredUsersDialog,

    },
    methods: {
        loging(e) {
            if (e === false) {
                this.$store.commit('changeState');
            }
        },
        toggleDialogClick() {
            this.dialogToggle = !this.dialogToggle;
        },
        logout(e) {
            e.preventDefault();
            axios.delete(`http://localhost:8080/ChatWAR/rest/users/loggedIn/${sessionStorage.getItem('username')}`)
                .then((response) => {
                    console.log(response);
                    this.$store.commit('changeState');
                    this.$store.commit('removeActiveUser', sessionStorage.getItem('username'));
                    this.$store.commit('deleteMessages');
                    this.$store.commit('removeRegisteredUsers');

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
        user() {
            return sessionStorage.getItem('username');
        },

    },
};
</script>

<style>

</style>
