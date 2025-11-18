import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CardSize } from '@/types/types';


export const useSizeStore = defineStore('size', () => {
    const SizeStore = ref<CardSize[]>([
        {
            id: 0,
            name: "small",
            color: "green"
        },
        {
            id: 1,
            name: "medium",
            color: "yellow"
        },
        {
            id: 3,
            name: "critical",
            color: "red"
        }
    ]);

})