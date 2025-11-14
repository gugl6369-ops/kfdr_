<script setup lang="ts">
  import NewItem from '@/components/NewPosts.vue';
  import {searchNews} from '@/stores/story';
  import { reactive, ref } from 'vue';
  import LoadingFull from '@/components/LoadingFull.vue';

  let positionPost = 0;
  let positionPostNext = 20;

  const store = searchNews();
  store.getNews(); 
  store.showNews(positionPost, positionPostNext);
  function getNewNews(){
    positionPostNext += 20;
    store.showNews(positionPost, positionPostNext); 
  }
</script>

<template>
  <div class="w-full flex justify-bitween flex-col items-center gap-20"  >
    <div v-if="!store.isLoading" class="wrapper max-w-260 grid grid-cols-3 gap-10 justify-center">
      <NewItem />  
    </div>
    <div>
      <LoadingFull />
    </div>
    <div class="flex ">
      <button class="w-20 rotate-90 cursor-pointer" @click="getNewNews()" >
        <img src="../assets/pic/arrowNext.png" alt="стрелка" />
      </button>
    </div>
  </div>
</template>
