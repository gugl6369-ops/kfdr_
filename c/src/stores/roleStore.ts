import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CardRole } from '@/types/types';

export const useRoleStore = defineStore('role', () => {
    const roles = ref<CardRole[]>([
        {
            id: 0,
            name: 'Designer',
            color: "#876ED7",
        },
        {
            id: 1,
            name: 'Backender',
            color: '#6C8CD5',
        },
        {
            id: 2,
            name: 'Frontender',
            color: '#5CCCCC',
        },
        {
            id: 3,
            name: 'Tester',
            color: '#FF7D73',
        },
        {
            id: 4,
            name: 'Analyst',
            color: '#65E17B',
        }
    ])
    return {roles};

})