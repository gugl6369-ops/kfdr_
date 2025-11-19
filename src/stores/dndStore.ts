import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {  board, card } from '@/types/types';


export const useDndStore = defineStore('dnd', () => {
    const cardGtag = ref<card | null>(null);
    const lastCard = ref<card | null>(null);
    const onDrag = (card : card) => {
        cardGtag.value = card;
        lastCard.value = cardGtag.value;
    }

    const onEndDrag = () => cardGtag.value = null;

    return {cardGtag, onDrag, onEndDrag, lastCard};
})