<template>
 <v-row justify="center">
    <v-dialog v-model="show" width="600px" >
          <v-card>
        <v-card-title>
          <span class="headline">Registered users</span>
        </v-card-title>


      <v-list dense>
        <v-list-item v-for="(u,i) in registeredUsers" :key="i">
            <v-list-item-icon>
            <v-icon>people</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{user !== u ? u: u+" (me)"}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialogToggle">Close</v-btn>
        </v-card-actions>
      </v-card>


    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegisteredUsersDialog',
    data() {
        return {
            registeredUsers: this.$store.state.registeredUsers,

        };
    },
    props: ['dialogToggle', 'show'],
    methods: {

    },
    created() {
        axios.get('http://localhost:8080/ChatWAR/rest/users/registered')
            .then((response) => {
                console.log(response.data);
                this.$store.commit('fetchRegisteredUsers', response.data);
            })
            .catch((error) => {
                console.log(error);
                alert('error get messages');
            });
    },
    computed: {
        user() {
            return sessionStorage.getItem('username');
        },
    },

};
</script>

<style>

</style>
