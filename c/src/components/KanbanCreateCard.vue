<script setup lang="ts">
import { ref, reactive } from 'vue'
import { type card } from "@/types/types";
import { useCardStore } from "@/stores/card";
import { formatDate } from '@/types/types';


const currentTimestamp =  ref<number>(new Date().getTime());

</script>
<template> 
    <article class="card w-full h-full max-w-120 flex flex-col  p-8 bg-white">
        <form id="card-form" class="w-full flex flex-col h-wull gap-5 justify-between">
            <div class="flex justify-between">
                <div class="card_role-input">
                   <select name="role" required>
                    <option value="Designer">Designer</option>
                    <option value="Backender">Backender</option>
                    <option value="Frontender">Frontender</option>
                    <option value="Tester">Tester</option>
                    <option value="Analyst">Analyst</option>
                   </select>
                </div>
                <p>{{ formatDate((new Date(currentTimestamp)))}}</p>
            </div>
            <div class="flex flex-col card-form_text-input gap-5">
                <label class="flex p-1" for="title">
                    <input class="card-form_inut-title" type="text" placeholder="Название" required/>
                </label>
                <div class="flex p-3 bg-gray-300/25 rounded-3xl">
                    <label for="subtitle">
                        <textarea  type="text" class="max-w-80 card-form_textarea" required>Комментарий</textarea>
                    </label>
                </div>
            </div>
            <div class="flex gap-2">
                 <select name="size" class="bg-green-400/25 rounded-3xl p-2 cursor-pointer " required>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="critical">Critical</option>
                   </select>
                   <select name="priority" class="bg-green-400/25 rounded-3xl p-2 cursor-pointer" required>
                    <option value="small">Low</option>
                    <option value="medium">Medium</option>
                    <option value="critical">Big</option>
                   </select>
    
            </div>
            <div class="flex justify-between">
                <div class="flex">
                    <img class="w-8 h-8" src="@/assets/pic/flag.png"/>
                    <input type="date" class="items-end" required>
                </div>
                <div class="flex items-center justify-center gap-2">
                    <!-- <div>  v-if="item.redact"
                        <input > изменить!!!!!!!!!!!!!!!!!!!!!!!!!!1
                    </div> -->
                    <button type="submit" class=" bg-green-500 p-2 rounded-3xl">
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

.card-form_text-input{
    
}
</style>