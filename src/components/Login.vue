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
            console.log(`${this.username} ${this.password}`);
            this.username = '';
            this.password = '';
            this.$router.push('home');
        },
    },

};
</script>
