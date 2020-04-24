<template>
    <v-navigation-drawer
      absolute
      permanent
      right
    >
      <template v-slot:prepend>
        <v-list-item >


          <v-list-item-content>
            <v-list-item-title>Active users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="(u,i) in activeUsers" :key="i">
            <v-list-item-icon>
            <v-icon>people</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{u}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'ActiveUsers',
    data() {
        return {
            activeUsers: this.$store.state.activeUsers,
        };
    },

};
</script>

<style>

</style>
