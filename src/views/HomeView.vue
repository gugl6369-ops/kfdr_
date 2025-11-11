<script setup lang="ts">
  import NewItem from '@/components/NewItem.vue';
  import {useCounterStore} from '../stores/counter';
  import { reactive, ref } from 'vue';
    const listPost = ref();

    let positionPost = 0;
    let positionPostNext = 10;

    const store = useCounterStore();
    store.getNews(positionPost, positionPostNext); 
    let stop = store.story; 

    function checkPosition(){
        const rect = listPost.getBoundingClientRect();
        const bottomCoordinate = rect.bottom;
        
        if(position >= threshold){
            positionPost += positionPostNext;
            positionPostNext += 10;
            store.getNews(positionPost, positionPostNext);
        }
    }
    window.addEventListener('scroll', checkPosition)
    window.addEventListener('resize', checkPosition)

</script>

<template>

  <main class="w-full flex justify-center"  >
    <div :ref="listPost" class="home_posts wrapper max-w-260 grid grid-cols-3 gap-10 justify-center" id="listPost">
      <NewItem />  
    </div>
    
  </main>
</template>
