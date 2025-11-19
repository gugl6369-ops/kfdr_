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
  <footer class="footer">
    <p>конец</p>
  </footer>
</template>
<style scoped>
.header{
  background-color: var(--white);
}
.header_title{
  font-size: 40px;
  color: var(--blueGray);
}
.header_subtitle{
  font-size: 40px;
  
}
.header-subtitle-white{
  color: var(--blueGray);
}
.main{
  background-color: var(--white);
}
.footer{
  background-color: var(--blueGray);
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 3rem;
}
</style>
