<script setup lang="ts">
    import {useCounterStore} from '../stores/counter';

    const store = useCounterStore();
    store.getNews();
    let stop = store.story; 

    console.log(stop);

</script>
<template>
    <article v-for="item in store.story" class="new-item p-6 w-1/2">
        <div class="new-item_header">
            <div :disable="item.type">
                <img src="../assets/pic/megafon.png" alt="Мегафон"/>
                <p>{{ item.type }}</p>
            </div>
            <div>
                <p>№{{ item.id }}</p>
            </div>
        </div>
        <div new-item_>
            <h3 :disable="item.by">{{ item.by }}</h3>
            <p :disable="item.time">{{ item.time }}</p>
        </div>
        <h2 :disable="item.title">{{ item.title }}</h2>
        <!-- <p>{{ item }}</p> -->
    </article>
</template>
<style>
</style>