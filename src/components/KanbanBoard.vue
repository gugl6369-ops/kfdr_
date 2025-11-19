<script setup lang="ts">
import { ref, reactive } from 'vue'
import CardItem from '@/components/KanbanCard.vue';
import CreateCardItem from '@/components/KanbanCreateCard.vue';
import { type board, type Status } from "@/types/types";
import { type card } from "@/types/types"
import { useBoardStore } from '@/stores/board';
import { useCardStore } from '@/stores/card';
import { useDndStore } from '@/stores/dndStore';

const addCard = ref<boolean>(false)

const boarStore = useBoardStore();
const cardStore = useCardStore();

const dndStore = useDndStore();
const getCards = (status : Status) => 
    cardStore.cardList.filter( (c) => status === c.status)

const dragOver = (status : Status) => (event : Event) => {
    if(dndStore.cardGtag && dndStore.cardGtag.status != status){
       if(stutConfirm(status).includes(dndStore.cardGtag.status)){
        event.preventDefault();
       }
    }
}

const drop = (status : Status) => (event: Event) =>{
    event.preventDefault();
    if(dndStore.lastCard){
        const newCard = dndStore.lastCard;
        newCard.status = status;

            cardStore.moveCard(newCard);
    }

}


    const stutConfirm = (status : Status) => {
        let stut: Status[] = [];
        switch (status) {
            case 'In-progress':
            stut = ['Todo', 'Review'];
            break;

            case 'Review':
            stut = ['In-progress'];
            break;

            case 'Done':
            stut = ['Review'];
            break;
        }
        return stut;
}

</script>
<template>
    <div class="home grid w-full gap-12">
        <div v-for="item in boarStore.boards" :key="String(item.id)"  class="board" 
            :style="{borderColor: item.background, 
                color: item.color}">
            <header class="board-header flex w-full items-start ">
                <div class="flex items-center gap-5 bg-white/50 p-5 rounded-3xl">
                    <div class="w-2 h-2 bg-black rounded-3xl" :style="{backgroundColor: item.color}"></div>
                    <h2 class="text-3xl">{{ item.name }}</h2>
                </div>
                
            </header>
            <div  @dragover="(event) => dragOver(item.name)(event)" @drop="(event) => drop(item.name)(event)" class="board_content min-h-100 h-full w-full flex gap-5 p-10">
                <div v-for="card in getCards(item.name)" >
                    <card-item draggable="true" @dragstart="dndStore.onDrag(card)" @dragend="dndStore.onEndDrag" :card="card"/>    
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
.home_button:hover{
    background-color: rgba(0, 0, 0, .1);
}
.home{
    background-color: var(--white);
    grid-template-columns: 1fr 1fr 1fr;
}
.board:first-child{
    grid-column: 1 / -1;
    grid-row: 1;
    padding: 30px;
    background-color: rgb(244, 244, 244);
    border: 5px solid white;
    box-shadow: 0 5px 15px white;

}
.board:not(:first-child){
    grid-row-start:  2;
    align-items: center;
    justify-content: center;
    padding: 50px 10px 50px;
}
.board{
    border: 2px solid transparent;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    box-shadow: 0 5px 15px white;
    box-shadow: 0 5px 15px rgb(181, 179, 179) inset;
    max-height: 100vh;
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

.board_content{
    overflow: auto;
}
</style>