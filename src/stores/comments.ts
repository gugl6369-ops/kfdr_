import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


export const useCommentsStore = defineStore('posts', () => {
    const id = ref<number>();
    const post = ref();
    const comment = ref();
    const isLoadingPost = ref<boolean>(false);
    const isLoadingComments = ref<boolean>(false);
    const setStoryId = (i:number) => {id.value = i};

    const getPost = async ()=>{
        if(!id.value) return;
        isLoadingPost.value = true;
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id.value}.json`)
        post.value = await response.json();
        isLoadingPost.value = false;
        return post;
    }

    const getComment = async ()=>{
        if(!post.value) return;
        isLoadingComments.value = true;
        comment.value = await Promise.all(post.value.kids.map( 
        async (x:number): Promise<any> => {
            const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${x}.json`)
            return response.json();
        }));
        isLoadingComments.value = false;
    }

    return {setStoryId, getPost, id, post, isLoadingPost, isLoadingComments, getComment, comment}; 
})





















