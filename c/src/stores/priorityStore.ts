import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CardPriority } from '@/types/types';



export const usePriorityStore = defineStore('priority', () => {
    const prioritys = ref<CardPriority[]>([
        {
            id: 0,
            name: "Little",
            color: "green"
        },
        {
            id: 1,
            name: "Average",
            color: "yellow"
        },
        {
            id: 2,
            name: "Big",
            color: "red"
        }
    ]);
    return {prioritys};
})