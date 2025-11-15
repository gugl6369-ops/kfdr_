<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {useNewsStore} from '@/stores/story';
import { onMounted } from 'vue';
const stores = useNewsStore();

onMounted(() =>{
  setInterval(() =>{
    stores.checkId();
  }, 60000)
})

</script>

<template>
  <header class="header w-full bg-blue-400/50">
    <div class="wrapper w-full p-8 flex flex-row justify-between">
      <nav>
        <RouterLink to="/">Домой</RouterLink>
      </nav>
      <button class="cursor-pointer" @click="stores.refresh">Обновить посты</button>
    </div>
  </header>
  <main class="flex flex-col gap-10 items-center justify-center w-full pt-20">
    <RouterView  />
  </main> 
</template>

<style scoped>

</style>
