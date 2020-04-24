<template>
  <div class="login">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="blue darken-2"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>


              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="add" >
                  <v-text-field
                    label="Username"
                    name="username"
                    prepend-icon="person"
                    type="text"
                    v-model="username"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                  <router-link to="/register" tag="a">Don't have an account?</router-link>


              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="blue darken-2 white--text">Login</v-btn>
              </v-card-actions>
              </v-form>
             </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'Login',
    components: {
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        add() {
            axios.post('http://localhost:8080/ChatWAR/rest/users/login', {
                username: this.username,
                password: this.password,
            })
                .then((response) => {
                    console.log(response);
                    sessionStorage.setItem('username', this.username);
                    const vm = this;

                    // eslint-disable-next-line no-undef
                    // this.conect(this.username);
                    this.socket = new WebSocket(`ws://localhost:8080/ChatWAR/ws/${this.username}`);

                    this.socket.onopen = function (event) {
                        console.log(event);
                    };


                    this.socket.onmessage = function (event) {
                        let temp = [];
                        temp = event.data.slice(1, -1).split(',');
                        console.log(temp);
                        if (temp[0] === 'users') {
                            vm.addActiveUser(temp.slice(1));
                        } else {
                            console.log(event);
                            vm.addMessage(event.data);
                        }
                    };


                    this.$router.push('home');
                })
                .catch((error) => {
                    console.log(error);
                    alert('Invalid username or password');
                });
        },
        addMessage(event) {
            this.$store.commit('addMessage', event);
        },
        addActiveUser(event) {
            this.$store.commit('addUsers', event);
        },
    },


};
</script>
