<template>
  <div id="app">
    <v-app>
      <app-bar/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue';

export default {
    components: {
        AppBar,
    },
    data() {
        return {
        };
    },

};
</script>


<style lang="scss">

</style>
