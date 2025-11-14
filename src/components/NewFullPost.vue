<script setup lang="ts">
    import {useCommentsStore} from '@/stores/comments';
    import LoadingFull from '@/components/LoadingFull.vue';
    import { computed } from 'vue';

    const store = useCommentsStore();
    
    const post = computed(() => store.post);
    
</script>

<template>
    <div v-if=" post" class="w-full flex flex-col bg-blue-400/25 p-12 rounded-lg gap-5">
        <div class="flex justify-between">
            <div>
                <div></div>
                <p v-if=" post.by" class="font-extrabold text-blue-800">{{post.by}}</p>
            </div>
            <p>№{{post.id}}</p>
        </div>
        <div class="flex justify-between">
            <h1 v-if=" post.title">{{ post.title}}</h1>
            <p v-if=" post.time" class="text-gray-600/80">{{ new Date(( post.time)*1000).toDateString()  }}</p>
        </div>
        <p v-if=" post.text" v-html=" post.text"></p>
    </div>
    <div v-else-if="store.isLoadingPost" class="flex items-center justify-center">
        <LoadingFull/>
    </div>
    <div v-else>
        <div>
            <h1 class="text-4xl">404</h1>
            <h2>Пост утерян или его и не было..</h2>
        </div>
    </div>
</template>

<style scoped>

</style>