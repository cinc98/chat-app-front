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
                <v-toolbar-title>Register</v-toolbar-title>


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

                <v-text-field
                    v-model="password"
                    id="password"
                    label="Confirm Password"
                    name="confirm-password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>

              <v-card-actions>
                    <v-btn to="/" class="ma-2" color="blue darken-2" dark>
        <v-icon dark left>mdi-arrow-left</v-icon>Back
      </v-btn>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="blue darken-2 white--text">Register</v-btn>
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
    name: 'Register',
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
        },
    },

};
</script>
