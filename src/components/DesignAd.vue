<style>
/* Import your CSS files here */
  @import '@/assets/assets/css/admin-style.css';
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Sharp');


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
        '/public/js/indexad.js',
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