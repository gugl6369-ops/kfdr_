import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const searchNews = defineStore('store', () => {
  const story = ref((new Array));
  const stor = new Array;
  const isLoading = ref<boolean>(false);
  const showStor =  ref((new Array));

  const getNews = () =>{
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then((d)=>{
        isLoading.value = true;
        return d.json();
      })
      .then((f)=>{
          f.forEach( (element: number) => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
              .then ((l) =>{
                return l.json();
              })
              .then((j) => {
                story.value.push(j);
                stor.push(Object.keys(story.value));
                isLoading.value = false;
              })
          });{
            
          }
      });
    
  }


  const showNews = (last:number, next:number) =>{
    const i = ref((new Array));
    i.value.push(story.value.slice(last, next));
    showStor.value.push(i);
  }

  return {getNews, isLoading, story, stor, showStor, showNews};
})
