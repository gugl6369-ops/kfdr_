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
    color: "#7BDCB5 ",
    bakground: "#0A5C3A",
    
    },
     {
    id: 2,
    name: "Review",
    color: "#FFB3DE",
    bakground: "#7A2A5C",
    },
     {
    id: 3,
    name: "Done",
    color: "#A6E3FF",
    bakground: "#1A4D6B",
    },
    
])


// export type BoardColor = "#7BDCB5 " | "#FFB3DE" | "#A6E3FF";
// export type BoardBackground = "#0A5C3A" | "#7A2A5C" | "#1A4D6B";


return {boards};

})