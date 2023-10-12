<template>
    <Design />
    <Shop />
    <Products />
    <Footer />

  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import Design from '../components/Design.vue';
  import Shop from '../components/Shop.vue';
  import Products from '../components/Products.vue';
  import Footer from '../components/Footer.vue';
  
  export default defineComponent({
    name: 'ShopView',
  
    components: {
      Design,Shop,Products,Footer,
    },
  });
  </script>
  