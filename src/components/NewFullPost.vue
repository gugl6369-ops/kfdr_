<script setup lang="ts">
    import {useCommentsStore} from '@/stores/comments';
    import { computed } from 'vue';
    const store = useCommentsStore();
    
    const item = computed(() => store.post);
    
</script>

<template>
    <div v-if="item">
        <div>
            <div>
                <div></div>
                <p v-if="item.by">{{ item.by }}</p>
            </div>
            <p>№{{ item.id }}</p>
        </div>
        <h1 v-if="item.title">{{item.title}}</h1>
        <h2 v-if="item.text">{{ item.text }}</h2>
        <p v-if="item.time">{{ new Date((item.time)*1000).toDateString()  }}</p>
    </div>
    <div v-else-if="store.isLoading">Загрущзка</div>
    <div v-else>
        <div>
            <img src="../assets/pic/star.png"></img>
            <h1>404</h1>
            <h2>Пост утерян или его и не было..</h2>
        </div>
    </div>
</template>

<style scoped>

</style>