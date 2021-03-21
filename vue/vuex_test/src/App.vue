<template>
  <div id="app">
    <HelloWorld/>
    <!-- <p>{{ $store.state.name }}</p> -->
    <Test/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/test'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  }
}
</script>

<style>

</style>
