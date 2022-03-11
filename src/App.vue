<template>
  <v-app>
    <v-main>
      <input type="text" v-model="filterText" @keyup="filterProducts(filterText)">
      <product-list-one></product-list-one>
      <product-list-two></product-list-two>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
import ProductOne from './components/ProductOne.vue'
import ProductTwo from './components/ProductTwo.vue'

export default {
  name: 'App',

  data: () => ({
    filterText:'',
  }),
  components: {
    'product-list-one':ProductOne,
    'product-list-two':ProductTwo
  },
  methods:{
    ...mapActions(['filterProducts'])
  }
}
</script>
