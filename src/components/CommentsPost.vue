<script setup lang="ts">
import {ref} from 'vue';
import { type Comment} from '@/types/types';

    const props = defineProps<{comm:Comment}>();
    const kids = ref<Comment[]>();
    const commDate = ref<string>(new Date(props.comm.time * 1000).toDateString()); 
    
    const getKids = async (ids:number[]) => { 
        kids.value = await Promise.all(ids.map( async (kid): Promise<any> => { 
            const response = fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`)
            return (await response).json();
            }));
    }
    if (props.comm.kids) getKids(props.comm.kids);
</script>
<template>
    <div class="flex flex-col gap-10 ">
        <div class="flex flex-col gap-5 bg-gray-400/25 p-5 rounded-lg">
            <div v-if="comm.by" class="w-full flex justify-between ">
                <p class="font-extrabold text-blue-600">{{ comm.by }}</p>
                <p v-if="comm.time" class="text-gray-400">{{ commDate }}</p>
            </div>
            <p v-if="comm.text" v-html=" comm.text" class="max-w-200"></p>
            <p v-if="comm.kids" class="flex p-2 bg-blue-400/25" >Ответов: {{ comm.kids.length }}</p>
        </div>
        
        <div v-if="comm.kids" v-for="kid in kids" class="pl-5">
            <CommentsPost :comm="kid"/>
        </div>
        
    </div>
</template>
<style scoped>

</style>