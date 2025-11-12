import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


export const useCommentsStore = defineStore('post', () => {
    const id = ref<number>();
    const post = ref();
    const comment = ref({});
    const setStoryId = (i:number) => {id.value = i};
    const getPost = ()=>{
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((item)=>{
        post.value = item;
    })
    }
    
    return {setStoryId, id }; 
})





















