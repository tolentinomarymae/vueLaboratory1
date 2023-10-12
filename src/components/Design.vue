<style>
/* Import your CSS files here */
  @import '@/assets/assets/css/style.css';
  @import '@/assets/assets/css/bootstrap.css';
  @import '@/assets/assets/css/responsive.css';

</style>


<script>
  export default {
    name: "Style",
  mounted() {
      this.loadScripts();
  },
  methods: {
      loadScripts() {
        const scriptUrls = [
        '/public/js/bootstrap.min.js',
        '/public/js/custom.js',
        '/public/js/jquery-3.4.1.min.js',
        ];

        const head = document.getElementsByTagName('head')[0];

        scriptUrls.forEach((scriptUrl) => {
          const script = document.createElement('script');
          script.src = scriptUrl;
          script.async = true;
          head.appendChild(script);
        });
      },
  
    },
  };
</script>