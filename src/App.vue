<template>
  <div id="app">
    <shop-menu/>
    <!--<div class="container mrgTop20">-->
      <router-view/>
    <!--</div>-->
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
  .mrgTop20 {margin-top: 20px}
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
