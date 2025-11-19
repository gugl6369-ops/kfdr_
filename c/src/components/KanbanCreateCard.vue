<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
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
const buttonSubmit = ref<boolean>(true)

const newCardForm = ref<card>( Object.assign({
    id: cardStore.cardList.length,
    role: roleStore.roles[0],
    date: new Date(),
    status: "Todo", 
    title: "",
    subtitle: "",
    size: sizeStore.sizes[0],
    priority: priorityStore.prioritys[0], 
    deadline: new Date(), 
    redact: null,
    overdue: true
}));


const currentTimestamp =  ref<number>(new Date().getTime());

const changeRoleColor = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    target.style.backgroundColor = newCardForm.value.role.color;
}

const changeSizeColor = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    target.style.backgroundColor = newCardForm.value.size.color;
}

const changePriorityColor = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    target.style.backgroundColor = newCardForm.value.priority.color;
}

const submit = (event: Event) => {
    event.preventDefault();
    cardStore.createCard(newCardForm.value);
}

const selectedDate = ref('');

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
        <form @submit="submit" id="card-form" class="w-full flex flex-col h-wull gap-5 justify-between">
            <div class="flex justify-between">
                <div class="card_role-input">
                   <select v-model="newCardForm.role" @change="changeRoleColor" class="text-xl p-2 rounded-xl" name="role" required>
                        <option v-for="option in roleStore.roles" :key="option.id" :value="option">{{ option.name }}</option>
                   </select>
                </div>
                <p>{{ formatDate((new Date(currentTimestamp)))}}</p>
            </div>
            <div class="flex flex-col card-form_text-input gap-5">
                <label class="flex p-1" for="title">
                    <input v-model="newCardForm.title" class="card-form_inut-title" type="text" placeholder="Название" required/>
                </label>
                <div class="flex p-3 bg-gray-300/25 rounded-3xl">
                    <label for="subtitle">
                        <textarea
                         v-model="newCardForm.subtitle"  
                         class="max-w-80 card-form_textarea" placeholder="Комментрий" required>
                        </textarea>
                    </label>
                </div>
            </div>
            <div class="flex gap-2">
                <select  v-model="newCardForm.size"   name="size" @change="changeSizeColor" class="text-xl bg-green-400/25 rounded-3xl p-2 cursor-pointer"  required>
                    <option v-for="option in sizeStore.sizes" :key="option.id" :value="option">{{option.name}}</option>   
                </select>
                <select  v-model="newCardForm.priority"   name="priority"  @change="changePriorityColor" class="text-xl bg-green-400/25 rounded-3xl p-2 cursor-pointer " required>
                    <option v-for="option in priorityStore.prioritys" :key="option.id" :value="option">{{option.name}}</option>   
                </select>

            </div>
            <div class="flex justify-between">
                <div class="flex">
                    <img class="w-8 h-8" src="@/assets/pic/flag.png"/>
                    <input  v-model="newCardForm.deadline"  @input="validateDate" type="date" class="items-end" required>
                </div>
                <div class="flex items-center justify-center gap-2"> 
                    <button type="submit" :disabled="!buttonSubmit" class=" bg-green-500 p-2 rounded-3xl cursor-pointer">
                        <img class="h-6 w-6" src="@/assets/pic/app.png"></img>
                    </button>
                    <button type="reset" class="p-2 flex justify-center items-center bg-gray-400/25 rounded-3xl cursor-pointer" >
                        <img class="w-6 h-6 " src="@/assets/pic/bask.png"/>
                    </button>
                </div>
            </div>
        </form>
    </article>
</template>
<style scoped>
.card{
    cursor: grab;
}
.card-form_inut-title{
    border-bottom: 2px solid var(--lightBlue);
    color: var(--lightBlue);
    font-size: 1.5rem;
}
.card-form_inut-title:focus{
    outline: none;
}
.card-form_textarea{
    resize: none;
    font-size: 1rem;
    padding: 5px;
}
.card-form_textarea:focus{
    outline: none;
}
</style>