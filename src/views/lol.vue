<script setup lang="ts">
    import {useCounterStore} from '../stores/counter';
    
    const store = useCounterStore();
    store.getNews();
    let stop = store.story; 

    console.log(stop);

</script>
<template>
    Приветщвыомптфывшиотв шцушгпрышвфгп рывшгп рфывлп
    <div v-for="item in store.story" >
        <p>{{item}}</p>
    </div>
</template>
<style>
</style>