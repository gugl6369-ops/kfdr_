<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header class="header w-full flex p-10 justify-between">
    <h1 class="header_title">Канбан</h1>
    <p class="header_subtitle">Проект: <span class="header-subtitle-white">Разарботка сайта для травки</span></p>
  </header>
  <main class="main flex p-12 wrapper">
    <RouterView />  
  </main>
  <footer>
    <p>конец</p>
  </footer>
</template>
<style scoped>
.header{
  background-color: var(--bluishGray);
}
.header_title{
  font-size: 40px;
  color: var(--white);
}
.header_subtitle{
  font-size: 40px;
  
}
.header-subtitle-white{
  color: var(--white);
}
.main{
  background-color: var(--white);
}
</style>
