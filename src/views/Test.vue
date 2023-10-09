<template>
  <div class ="main-wrapper">
	<Header/>
	<Hero/>
	<Intro/>
	<Featured/>
	<Product/>
  </div>
</template>

<script>
	import Header from '@/components/the-plaza/Header.vue';
	import Hero from '@/components/the-plaza/Hero.vue';
	import Intro from '@/components/the-plaza/Intro.vue';
	import Featured from '@/components/the-plaza/Featured.vue';
	import Product from '@/components/the-plaza/Product.vue';
export default {
  name: 'Test',
  components:{
	Header,
	Hero,
	Intro,
	Featured,
	Product,
  }
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,400i,500,500i,600,600i,700,700i');
  @import '@/assets/the-plaza2/css/bootstrap.min.css'; 
  @import '@/assets/the-plaza2/css/font-awesome.min.css';
  @import '@/assets/the-plaza2/css/owl.carousel.css';
  @import '@/assets/the-plaza2/css/style.css';
  @import '@/assets/the-plaza2/css/animate.css';
</style>
