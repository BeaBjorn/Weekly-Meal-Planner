<!--

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

-->

<template>
<!-- Importing header component -->
  <Header />
  <main>
<!-- RouterView for single page application -->    
    <RouterView />
  </main>
<!-- Importing footer component -->  
  <Footer />
</template>
  
  <script>
//Importing RouterView, Header and Footer
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  
//Components used
  export default {
    components: {
      Header, 
      Footer,
      RouterView
    }
  }
  </script>
  <style scoped>
  </style>
  
  