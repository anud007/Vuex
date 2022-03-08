<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductOne from './components/ProductOne.vue'
import ProductTwo from './components/ProductTwo.vue'
export default {
  name: 'App',
  components: {
    'product-list-one':ProductOne,
    'product-list-two':ProductTwo
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color:#555;
}
</style>
