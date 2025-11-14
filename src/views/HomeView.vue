<script setup lang="ts">
  import NewItem from '@/components/NewPosts.vue';
  import {useNewsStore} from '@/stores/story';
  import { onMounted, reactive, ref } from 'vue';
  import LoadingFull from '@/components/LoadingFull.vue';

  const store = useNewsStore();
  onMounted( async () => {
    await store.getIdStor();
    await store.getNextStory();
  })

</script>

<template>
  <div class="w-full flex justify-bitween flex-col items-center gap-20"  >
    <div class="wrapper max-w-260 grid grid-cols-3 gap-10 justify-center">
      <NewItem />  
    </div>

    <div class="flex ">
      <button class="w-20 rotate-90 cursor-pointer" @click="store.getNextStory" >
        <img src="../assets/pic/arrowNext.png" alt="стрелка" />
      </button>
    </div>
  </div>
</template>
