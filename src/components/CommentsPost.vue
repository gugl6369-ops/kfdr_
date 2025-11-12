<script setup lang="ts">
import {ref} from 'vue';

    
    interface Comment{
        by : string,
        id : number,
        kids: number[],
        text : string,
        time : number,
    };
    const props = defineProps<{comm:Comment}>();
    const kids = ref<Comment[]>();
    
    const getKids = async (ids:number[]) => { 
        kids.value = await Promise.all(
            ids.map((kid) => fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`)
                .then((i) => i.json())
            )
        )
    }
    
    if (props.comm.kids) getKids(props.comm.kids);
</script>
<template>
    <div class="flex flex-col gap-10 ">
        <div class="flex flex-col gap-5 bg-gray-400/25 p-5 rounded-lg">
            <div v-if="props.comm.by" class="w-full flex justify-between ">
                <p class="font-extrabold text-blue-600">{{ props.comm.by }}</p>
                <p v-if="props.comm.time" class="text-gray-400">{{ new Date(props.comm.time * 1000).toDateString() }}</p>
            </div>
            <p v-if="props.comm.text" v-html="props.comm.text" class="max-w-200"></p>
            <p v-if="props.comm.kids" class="flex p-2 bg-blue-400/25" >Ответов: {{ props.comm.kids.length }}</p>
        </div>
        
        <div v-if="props.comm.kids" v-for="kid in kids" class="pl-5">
            <CommentsPost :comm="kid"/>
        </div>
        
    </div>
</template>
<style scoped>

</style>