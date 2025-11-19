<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { type card } from "@/types/types";
import { useCardStore } from "@/stores/card";
import { formatDate } from '@/types/types';
import { useSizeStore } from '@/stores/sizeStore';
import { usePriorityStore } from '@/stores/priorityStore'
import { useRoleStore } from '@/stores/roleStore';


const cardStore = useCardStore();
const roleStore = useRoleStore();
const priorityStore = usePriorityStore();
const sizeStore = useSizeStore();

interface CardProps {
    card: card;
}
const props = defineProps<CardProps>();

const redactCard = computed(() => Object.assign(props.card))

const currentTimestamp =  ref<number>(new Date().getTime());

const changeRoleColor = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    target.style.backgroundColor = redactCard.value.role.color;
}

const changeSizeColor = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    target.style.backgroundColor = redactCard.value.size.color;
}

const changePriorityColor = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    target.style.backgroundColor = redactCard.value.priority.color;
}


const submit = (event: Event) => {
    event.preventDefault();
    redactCard.value.redact = new Date();
    cardStore.updateCard(redactCard.value);
}
const buttonSubmit = ref<boolean>(true)

const validateDate = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const date = target.value;
    const prov = Number(new Date(date)) > Number(new Date()); 
    if(!prov) {buttonSubmit.value = false}
    else buttonSubmit.value = true
}

</script>
<template>
     <article class="card w-full h-full max-w-120 flex flex-col  p-8 bg-white">
        <form  @submit="submit"  id="card-form" class="w-full flex flex-col h-wull gap-5 justify-between">
            <div class="flex justify-between">
                <div class="card_role-input">
                   <select v-model="redactCard.role" @change="changeRoleColor" class="text-xl p-2 rounded-xl" name="role" required>
                        <option v-for="option in roleStore.roles" :key="option.id" :value="option">{{ option.name }}</option>
                   </select>
                </div>
                <p>{{ formatDate((new Date(currentTimestamp)))}}</p>
            </div>
            <div class="flex flex-col card-form_text-input gap-5">
                <label class="flex p-1" for="title">
                    <input v-model="redactCard.title" class="card-form_inut-title" type="text" placeholder="Название" required/>
                </label>
                <div class="flex p-3 bg-gray-300/25 rounded-3xl">
                    <label for="subtitle">
                        <textarea
                         v-model="redactCard.subtitle"  
                         class="max-w-80 card-form_textarea" placeholder="Комментрий" required>
                        </textarea>
                    </label>
                </div>
            </div>
            <div class="flex gap-2">
                <select  v-model="redactCard.size"   name="size" @change="changeSizeColor" class="text-xl bg-green-400/25 rounded-3xl p-2 cursor-pointer"  required>
                    <option v-for="option in sizeStore.sizes" :key="option.id" :value="option">{{option.name}}</option>   
                </select>
                <select  v-model="redactCard.priority"   name="priority"  @change="changePriorityColor" class="text-xl bg-green-400/25 rounded-3xl p-2 cursor-pointer " required>
                    <option v-for="option in priorityStore.prioritys" :key="option.id" :value="option">{{option.name}}</option>   
                </select>
            </div>
            <div class="flex justify-between">
                <div class="flex">
                    <img class="w-8 h-8" src="@/assets/pic/flag.png"/>
                    <input  v-model="redactCard.deadline"  @input="validateDate" type="date" class="items-end" required>
                </div>
                <div class="flex items-center justify-center gap-2"> 
                    <button type="submit" :disabled="!buttonSubmit"  class=" bg-green-500 p-2 rounded-3xl cursor-pointer">
                        <img class="h-6 w-6" src="@/assets/pic/app.png"></img>
                    </button>
                    <button type="reset"  class="p-2 flex justify-center items-center bg-gray-400/25 rounded-3xl cursor-pointer" >
                        <img class="w-6 h-6 " src="@/assets/pic/bask.png"/>
                    </button>
                </div>
            </div>
        </form>
    </article>
</template>
<style>

</style>