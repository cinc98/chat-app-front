<template>

  <div>
    <v-app-bar
    color="blue darken-2 white--text">
      <v-app-bar-nav-icon @click="changeState()"></v-app-bar-nav-icon>
      <router-link to="/" tag="v-toolbar-title">Chat app</router-link>
      <v-spacer></v-spacer>

    </v-app-bar>
  </div>

</template>

<script>

export default {
    name: 'AppBar',

    methods: {
        changeState() {
            this.$store.commit('changeState');
        },
    },
};
</script>

<style>

</style>
