import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type  board } from '@/types/types';

export const useBoardStore = defineStore('board', () => {
  const boards = ref<board[]>([
    {
    id: 0,
    name: "Todo",
    add: true,
    },
    {
    id: 1,
    name: "In-progress",
    },
     {
    id: 2,
    name: "Review",
    },
     {
    id: 3,
    name: "Done",
    },
    
])


//цвета 


return {boards};

})