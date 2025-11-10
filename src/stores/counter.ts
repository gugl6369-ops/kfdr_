import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const story = ref([]);
  const comment = new Object();
  const stor = new Array;
  const getNews = () =>{
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then((d)=>{
        return d.json();
        
      })
      .then((f)=>{

          f.slice(0,100).forEach( (element: any) => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
              .then ((l) =>{
                return l.json();
              })
              .then((j) => {
                story.value = j;
                stor.push(Object.keys(story.value));

              })
          });{
            
          }
      });
      

  }

  
  return {getNews, story, comment, stor};
})
