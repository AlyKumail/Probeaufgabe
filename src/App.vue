<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup lang="ts">
  import Header from './layout/Header.vue';
  import Footer from './layout/Footer.vue';
</script>

<style>
  #app {
    @apply antialiased flex flex-col items-center mt-4;
    max-width: 540px;
    margin: 0 auto !important;
  }
</style>
