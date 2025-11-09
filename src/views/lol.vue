<script setup lang="ts">
    import {useCounterStore} from '../stores/counter';
    
    const store = useCounterStore();
    store.getNews();
</script>
<template>
    Приветщвыомптфывшиотв шцушгпрышвфгп рывшгп рфывлп
    <p v-for="id in store.id">{{id}}</p>
</template>
<style>
</style>