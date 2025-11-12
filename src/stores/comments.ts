import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


export const useCommentsStore = defineStore('posts', () => {
    const id = ref<number>();
    const post = ref();
    const comment = ref();
    const isLoading = ref<boolean>(false);
    const setStoryId = (i:number) => {id.value = i};
    const getPost = async ()=>{
        if(!id.value) return;
        isLoading.value = true;
        post.value = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id.value}.json`)
        .then((i)=> {
            return i.json();
        })
        .finally(()=>{
            isLoading.value = false;
        })
    }
    const getComment = async ()=>{
        if(!post.value) return;
        comment.value = await Promise.all(post.value.kids.map( (x:number) => fetch(`https://hacker-news.firebaseio.com/v0/item/${x}.json`)
        .then( (i) => i.json() )));
        
    }
    
    return {setStoryId, getPost, id, post, isLoading, getComment, comment}; 
})





















