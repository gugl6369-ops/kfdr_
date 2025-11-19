<script setup lang="ts">
import { ref, reactive } from 'vue'
import { type card } from "@/types/types";
import {formatDate} from "@/types/types";
import { useCardStore } from '@/stores/card';

const cardStore = useCardStore();

interface CardProps {
    card: card;
}
const props = defineProps<CardProps>();




</script>
<template>
    <article class="card w-full min-w-90 max-w-110 flex flex-col gap-5 justify-center items-center p-8 bg-white">
        <div class="flex flex-row justify-between w-full items-center">
            <div class="flex items-center gap-2">
                <p class="flex p-2 bg-pink-400/25 rounded-3xl text-xl " :style="{backgroundColor: card.role.color}">{{ card.role.name }}</p>
                <img class="w-7 h-7 cursor-pointer" src="@/assets/pic/redact-icon.png"/>
            </div>
            <p class="text-gray-400">{{formatDate(card.date)}}</p>
        </div>
        <div class="flex w-full justify-start flex-col gap-5 ">
            <h3 class="text-2xl">{{card.title}}</h3>
            <div class="flex bg-gray-600/5 p-5 rounded-3xl">
                <h4 class="max-w-80">{{card.subtitle}}</h4>
            </div>
        </div>
        <div class="flex w-full gap-2 items-start">
            <p class="text-xl rounded-3xl p-2" :style="{color: card.size.color, border: `3px solid ${card.size.color}`}">{{card.size.name}}</p>
            <p class="text-xl rounded-3xl p-2" :style="{color: card.priority.color,  border: `3px solid ${card.priority.color}`} ">{{card.priority.name}}</p>
        </div>
        <div class="w-full flex justify-between items-center">
            <div class="flex gap-2 items-center items-center">
                <img class="w-8 h-8" src="@/assets/pic/flag.png"></img>
                <p class="items-end">{{formatDate(card.deadline)}}</p>
            </div>
            <div class="flex items-center gap-5">
                <div v-if="card.redact">
                    <p class="text-xl text-gray-400">Ред. {{formatDate(card.redact)}}</p><!--изменить!!!!!!!!!!!!!!!!!!!!!!!!!!1-->
                </div>
                <button type="button" @click="cardStore.deleteCard(card)" class="p-2 flex justify-center items-center bg-gray-400/25 rounded-3xl cursor-pointer">
                    <img class="w-6 h-6 " src="@/assets/pic/bask.png"></img>
                </button>
            </div>
        </div>
    </article>
</template>
<style> 
.card{
    border-radius: 40px; 
    box-shadow: 0 5px 15px rgb(193, 188, 188);
}
</style>