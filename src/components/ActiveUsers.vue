<template>
<div>
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
        <v-list-item v-for="(u,i) in activeUsers" :key="i" :disabled="user === u" @click="toggleDialogClick(u)">
            <v-list-item-icon>
            <v-icon>people</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{user !== u ? u: u+" (me)"}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <send-message-dialog v-bind:dialogToggle="this.toggleDialogClick" v-bind:show="this.dialogToggle" v-bind:reciever="this.name" />
  </div>
</template>

<script>
import SendMessageDialog from './SendMessageDialog.vue';

export default {
    name: 'ActiveUsers',
    data() {
        return {
            activeUsers: this.$store.state.activeUsers,
            dialogToggle: false,
            name: '',
        };
    },
    components: {
        SendMessageDialog,
    },
    methods: {
        toggleDialogClick(u) {
            this.name = u;
            this.dialogToggle = !this.dialogToggle;
        },

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
