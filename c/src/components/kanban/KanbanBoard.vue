<script setup lang="ts">
import { ref, reactive } from 'vue'
import CardItem from '@/components/kanban/KanbanCard.vue';
import { type board } from "@/types/kanban.ts";

const boards = ref<board[]>([
    {
    id: 0,
    kids: [0, 1],
    name: "done",
    lenght: 1,
    }
])

</script>
<template>
    <div class="home grid grid-colms-4">
        <div v-for="item in boards" class="board flex flex-col p-12">
            <header>
                <h2></h2>
            </header>
            <div class="flex flex-col gap-5">
                <CardItem />    
            </div> 
        </div>
    </div>
</template>
<style>
.home{
    background-color: var(--white);
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
}
.board{
    background-color: var(--lightBlue);
}

</style>