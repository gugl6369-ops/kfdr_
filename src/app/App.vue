<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {useCommentsStore} from '@/stores/comments';
const store = useCommentsStore();



</script>

<template>
  <header class="header w-full bg-blue-400/50">
    <div class="wrapper p-8 flex-row justufy-between">
      <nav>
        <RouterLink to="/">Домой</RouterLink>
      </nav>
      <button      >Обновить посты</button>
    </div>
  </header>
  <main class="flex flex-col gap-10 items-center justify-center w-full pt-20">
    <RouterView  />
  </main> 
</template>

<style scoped>

</style>
