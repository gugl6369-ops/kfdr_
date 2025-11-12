<script setup lang="ts">
  import NewItem from '@/components/NewItem.vue';
  import {searchNews} from '../stores/counter';
  import { reactive, ref } from 'vue';

  let positionPost = 0;
  let positionPostNext = 20;

  const store = searchNews();
  store.getNews(positionPost, positionPostNext); 
  function getNewNews(){
    positionPost = positionPostNext;
    positionPostNext += 20;
    store.getNews(positionPost, positionPostNext); 
  }


  
</script>

<template>
  <div class="w-full flex justify-bitween flex-col items-center gap-20"  >
    <div class="home_posts wrapper max-w-260 grid grid-cols-3 gap-10 justify-center" id="listPost">
      <NewItem />  
    </div>
    <div class="flex ">
      <img class="w-20 rotate-90 cursor-pointer" @click="getNewNews()" src="../assets/pic/arrowNext.png" alt="стрелка" />
    </div>
  </div>
</template>
