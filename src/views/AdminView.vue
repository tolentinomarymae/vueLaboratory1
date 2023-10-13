<template>
    <Admin />
    <DesignAd />


  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import DesignAd from '../components/DesignAd.vue';
  import Admin from '../components/Admin.vue';

  
  export default defineComponent({
    name: 'AdminView',
  
    components: {
      DesignAd,Admin,
    },
  });
  </script>
  