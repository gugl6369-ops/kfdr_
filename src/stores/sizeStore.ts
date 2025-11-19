import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CardSize } from '@/types/types';


export const useSizeStore = defineStore('size', () => {
    const sizes = ref<CardSize[]>([
        {
            id: 0,
            name: "Small",
            color: "green"
        },
        {
            id: 1,
            name: "Medium",
            color: "yellow"
        },
        {
            id: 2,
            name: "Critical",
            color: "red"
        }
    ]);
    return {sizes};
})