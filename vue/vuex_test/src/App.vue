<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <!-- <p>{{ $store.state.name }}</p> -->
    <ShoppingCart/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Test from './components/test'
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Test
    ShoppingCart
  }
}
</script>

<style>

</style>
