<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader';
export default {
  name: 'app',
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
