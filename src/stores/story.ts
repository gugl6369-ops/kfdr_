import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useNewsStore = defineStore('news', () => {  
  const storyId = ref((new Array));
  const showStor =  ref((new Array));
  const count = ref(0);

  const getIdStor = async () =>{
    const responseId = await  fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
    storyId.value = await responseId.json();
  }

  const getNextStory = async () =>{
    const nextId = storyId.value.slice(count.value, count.value + 20);
    count.value += 20;

    const nextStories = await Promise.all(nextId.map( 
        async (id:number): Promise<any> => {
          const responseStory = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);        
          return responseStory.json();
        }
    ));
    showStor.value.push(...nextStories);
  }

  const refresh = async () =>{
    const refreshId = storyId.value.slice(0, count.value);
    const refreshStories = await Promise.all(refreshId.map( 
        async (id:number): Promise<any> => {
          const responseStory = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);        
          return responseStory.json();
        }
    ));
    showStor.value = refreshStories;
  }

  const checkId = async () =>{
    const responseId = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
    const checkIds = await responseId.json();
    if(!storyId.value.every( (elem, index) => elem === checkIds[index]) ){
      storyId.value = checkIds;
      refresh();
    } 
  }
  
  return {showStor, getIdStor, getNextStory, checkId, refresh};
})
