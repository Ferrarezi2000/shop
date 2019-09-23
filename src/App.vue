<template>
  <div id="app">
    <shop-menu/>
      <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu'

export default {
  name: 'App',
  components: {'shop-menu': Menu}
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
