<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header w-full bg-blue-400/50">
    <div class="wrapper p-8 flex-row justufy-between">
      <nav>
        <RouterLink to="/about">Random</RouterLink>
      </nav>
    </div>
  </header>
  <main class="flex flex-col gap-100 items-center justify-center">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
