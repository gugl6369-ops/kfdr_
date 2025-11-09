import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const id = ref([]);  
  const getNews = () =>{
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then((d)=>{
        return d.json();
      })
      .then((f)=>{
        id.value = f;
      });
  }
  

  return {getNews, id};
})
