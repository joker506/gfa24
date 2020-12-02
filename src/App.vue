<template>
  <div id="app">
    <AdminPanel />
  </div>
</template>

<script>
import AdminPanel from '@/layout/AdminPanel';
export default {
  name: 'App',
  components: {
    AdminPanel,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
