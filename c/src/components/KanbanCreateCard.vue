<script setup lang="ts">
import { ref, reactive } from 'vue'
import { type card } from "@/types/types";
import { useCardStore } from "@/stores/card";



</script>
<template> 
    <article class="card w-full h-full max-w-120 flex flex-col gap-5 justify-center p-8 bg-white">
        <form id="card-form" class="w-full">
            <div сlass="card_header">
                <div class="card_">
                    <label for="role">
                        <input type="radio" name="role"> <!-- радио кнопку делать -->
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                </div>
                <p ></p><!--дата сейчас-->
            </div>
            <div >
                <input >
                <div >
                    <input type="text" class="max-w-80">
                </div>
            </div>
            <div >
                <button type="button" class="bg-green-400/25 rounded-3xl p-2 cursor-pointer">small</button>
                <button type="button" class="bg-green-400/25 rounded-3xl p-2 cursor-pointer">small</button>
            </div>
            <div >
                <div >
                    <img class="w-8 h-8" src="@/assets/pic/flag.png"/>
                    <input type="date" class="items-end">
                </div>
                <div >
                    <div> <!-- v-if="item.redact"-->
                        <input > <!--изменить!!!!!!!!!!!!!!!!!!!!!!!!!!1-->
                    </div>
                    <div >
                        <img class="w-6 h-6 " src="@/assets/pic/bask.png"/>
                    </div>
                </div>
            </div>
        </form>
    </article>
</template>
<style scoped>
.card_header{
    display: flex;
    background-color: aquamarine;
}
</style>