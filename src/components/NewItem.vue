<script setup lang="ts">
    import {useCounterStore} from '../stores/counter';
    const store = useCounterStore();
</script>
<template>
    <article v-for="item in store.story" class="new-item flex flex-col relative p-6 w-full shadow-xl rounded-lg gap-5 justify-between">        
        <div class="new-item_header">
            <div :disable="item.type" class="flex bg-blue-100 w-auto p-1 rounded-r-lg items-center absolute top-4 left-0 pl-4 pr-2">
                <img class="w-8" src="../assets/pic/megafon.png" alt="Мегафон"/>
                <p class="text-black">{{ item.type }}</p>
            </div>
            <div class="flex items-center justify-end">
                <p class="text-gray-500">№{{ item.id }}</p>
            </div>
        </div>
        <div class="flex justify-between">
            <h3 :disable="item.by" class="text-blue-500 font-extrabold">{{ item.by }}</h3>
            <p :disable="item.time" class="flex text-pink-500/50"><i>{{ new Date(item.time*1000).toDateString() }}</i></p>
        </div>
        <h2 :disable="item.title">{{ item.title }}</h2>
        <div class="flex justify-between">
            <p :disable="item.descendants">Комментарии: {{ item.descendants }}</p>
            <img class="w-4 h-4 transform-cpu--tw-rotate-x" src="../assets/pic/arrow.png"></img>
        </div>
        <!-- <p>{{ item }}</p> -->
    </article>
</template>
<style>
</style>