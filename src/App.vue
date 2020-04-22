<template>
  <div id="app">
    <app-bar/>
    <router-view/>
  </div>
</template>

<script>
import AppBar from './components/AppBar/AppBar.vue';

export default {
    components: {
        AppBar,
    },
};
</script>

<style lang="scss">

</style>
