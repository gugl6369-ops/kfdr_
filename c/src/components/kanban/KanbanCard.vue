<script setup lang="ts">
import { ref, reactive } from 'vue'
import { type card } from "@/types/kanban.ts";

const cards = ref<card[]>([
    {
        id: 0,
        role: 'Tester',
        date: new Date(2024, 6, 4),
        status: "done",
        title: "Konsep hero title yorg menorik",
        subtitle: "Client wants more whitespace in the left sidebar", 
        size: "small",
        priority: "small",
        deadline: new Date(2024, 6, 4),
        redact: null,
        overdue: true,
    },
     {
        id: 1,
        role: 'Tester',
        date: new Date(2024, 6, 4),
        status: "done",
        title: "Konsep hero title yorg menorik",
        subtitle: "Client wants more whitespace in the left sidebar", 
        size: "small",
        priority: "small",
        deadline: new Date(2024, 3, 3, 32, 3),
        redact: new Date(2024, 3, 3, 32, 3),
        overdue: true,
    }
]) 

const formatDate = (date: Date): string => 
{
    const monthName = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    const day = date.getDate();
    const month = monthName[date.getDate()];
    return `${month} ${day}`;
}

</script>
<template>
    <article v-for="item in cards" class="w-100 flex flex-col gap-5 justify-center items-center p-8 border-3 border-blue-400/25 rounded-xl bg-white">
        <div class="flex flex-row justify-between w-full items-center">
            <div class="flex items-center gap-2">
                <p class="flex p-2 bg-pink-400/25 rounded-3xl ">{{ item.role }}</p>
                <img class="w-7 h-7 cursor-pointer" src="@/assets/pic/redact-icon.png"/>
            </div>
            <p class="text-gray-400">{{formatDate(item.date)}}</p>
        </div>
        <div class="flex flex-col gap-5 ">
            <h3 class="text-2xl">{{item.title}}</h3>
            <div class="flex bg-gray-600/5 p-5 rounded-3xl">
                <h4 class="max-w-80">{{item.subtitle}}</h4>
            </div>
        </div>
        <div class="flex w-full gap-2 items-start">
            <p class="bg-green-400/25 rounded-3xl p-2">{{item.size}}</p>
            <p class="bg-green-400/25 rounded-3xl p-2">{{item.priority}}</p>
        </div>
        <div class="w-full flex justify-between items-center">
            <div class="flex gap-2 items-center items-center">
                <img class="w-8 h-8" src="@/assets/pic/flag.png"></img>
                <p class="items-end">{{formatDate(item.deadline)}}</p>
            </div>
            <div class="flex items-center gap-5">
                <div v-if="item.redact">
                    <p class="text-xl text-gray-400">Ред. {{formatDate(item.redact)}}</p><!--изменить!!!!!!!!!!!!!!!!!!!!!!!!!!1-->
                </div>
                <div class="p-2 flex justify-center items-center bg-gray-400/25 rounded-3xl cursor-pointer">
                    <img class="w-6 h-6 " src="@/assets/pic/bask.png"></img>
                </div>
            </div>
        </div>
    </article>
</template>
<style></style>