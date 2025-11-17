<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header class="header w-full flex p-10 justify-between">
    <h1>Канбан</h1>
    <p>Проект: Разарботка сайта для травки</p>
  </header>
  <main>
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
</style>
