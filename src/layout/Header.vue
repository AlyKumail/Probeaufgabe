<template>
    <header class="w-full h-[7vh] font-semibold text-white text-lg bg-[#42b883] text-center flex items-center gap-6 justify-center">
      <h1>{{ headerTitle }}</h1>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const headerTitle = ref('');
  
  onMounted(() => {
    const storedHeaderTitle = localStorage.getItem('headerTitle');
    if (storedHeaderTitle) {
      headerTitle.value = storedHeaderTitle;
    }
  });
  </script>
  