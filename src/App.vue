<template>
  <TheHeader />
  <router-view />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
