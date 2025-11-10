<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header w-full">
    <div class="wrapper p-8 flex-row justufy-between">
      <nav>
        <RouterLink to="/about">Random</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
