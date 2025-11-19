<script setup lang="ts">
import { ref, reactive } from 'vue'
import CardItem from '@/components/KanbanCard.vue';
import CreateCardItem from '@/components/KanbanCreateCard.vue';
import { type board, type Status } from "@/types/types";
import { type card } from "@/types/types"
import { useBoardStore } from '@/stores/board';
import { useCardStore } from '@/stores/card';
const addCard = ref<boolean>(false)

const boarStore = useBoardStore();
const cardStore = useCardStore();

const getCards = (status : Status) => 
    cardStore.cardList.filter( (c) => status === c.status)


</script>
<template>
    <div class="home grid w-full gap-12">
        <div v-for="item in boarStore.boards" :key="String(item.id)" class="board" >
            <header class="board-header flex w-full items-start ">
                <div class="flex items-center gap-5">
                    <div class="w-2 h-2 bg-black rounded-3xl"></div>
                    <h2 class="text-3xl">{{ item.name }}</h2>
                </div>
                
            </header>
            <div class="board_content h-full w-full flex gap-5 p-10">
                <div v-for="card in getCards(item.name)" >
                    <card-item  :card="card"/>    
                </div>
                <div v-if="item.add" class="h-full">
                    <div @click="() => { addCard = !addCard} " v-if="!addCard" class="home_button h-full flex items-center cursor-pointer">
                        <img class="home_button-img w-15 h-15" src="@/assets/pic/app.png"/>
                    </div>
                    <div v-else class="h-full">
                        <create-card-item @submit="() => { addCard = !addCard}" />
                    </div>
                </div>

            </div> 
        </div>
    </div>
</template>
<style>
.home{
    background-color: var(--white);
    grid-template-columns: 1fr 1fr 1fr;
}
.board:first-child{
    grid-column: 1 / -1;
    grid-row: 1;
    padding: 30px;
    background-color: rgb(244, 244, 244);
    border: 5px solid rgb(64, 131, 167);

}
.board:not(:first-child){
    background-color: var(--lightBlue);
    grid-row-start:  2;
    align-items: center;
    justify-content: center;
    padding: 50px 10px 50px;
}
.board{
    display: flex;
    flex-direction: column;
    border-radius: 50px;
}
.board:not(:first-child) > .board_content{
    display: flex;
    flex-direction: column;
}
.board-header{
    padding-left: 90px;
}
.home_button{
    border: 5px solid var(--blueGray);
    padding: 12px;
    border-radius: 0 20px 20px 0;
}
.home_button-img{
    opacity: 0.7;
}
</style>