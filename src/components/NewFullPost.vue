<script setup lang="ts">
    import {useCommentsStore} from '@/stores/comments';
    import { computed } from 'vue';
    const store = useCommentsStore();
    
    const item = computed(() => store.post);
    
</script>

<template>
    <div v-if="item" class="w-full flex flex-col bg-blue-400/25 p-12 rounded-lg gap-5">
        <div class="flex justify-between">
            <div>
                <div></div>
                <p v-if="item.by" class="font-extrabold text-blue-800">{{ item.by }}</p>
            </div>
            <p>№{{ item.id }}</p>
        </div>
        <div class="flex justify-between">
            <h1 v-if="item.title">{{item.title}}</h1>
            <p v-if="item.time" class="text-gray-600/80">{{ new Date((item.time)*1000).toDateString()  }}</p>
        </div>
        <p v-if="item.text" v-html="item.text"></p>
    </div>
    <div v-else-if="store.isLoading">Загрузка</div>
    <div v-else>
        <div>
            <h1 class="text-4xl">404</h1>
            <h2>Пост утерян или его и не было..</h2>
        </div>
    </div>
</template>

<style scoped>

</style>