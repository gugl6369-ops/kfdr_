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
    <div>
        <p v-if="props.comm.by">{{ props.comm.by }}</p>
        <p v-if="props.comm.text" v-html="props.comm.text"></p>
        <p v-if="props.comm.time">{{ props.comm.time }}</p>
        <p v-if="props.comm.kids">{{ props.comm.kids.length }}</p>

        <div v-if="props.comm.kids" v-for="kid in kids" class="comment">
            <CommentsPost :comm="kid"/>
        </div>
        
    </div>
</template>
<style scoped>
.comment{
    padding-left: 50px;
}
</style>