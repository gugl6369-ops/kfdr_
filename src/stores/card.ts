import { ref, computed, createRenderer } from 'vue'
import { defineStore } from 'pinia'
import type { card, CardRole, Status } from '@/types/types';
import {formatDate} from '@/types/types'


export const useCardStore = defineStore('card', () => {
  const cardList = ref<card[]>([]);


  const createCard = (card:card) => {
    cardList.value.push(card);
  }
  const deleteCard = (card:card) => {
    const index = cardList.value.findIndex(x => x.id === card.id);
    if (index !== -1) cardList.value.splice(index, 1);
    actualIds();
  }
  
  const actualIds = () => {
     cardList.value = cardList.value.map((elem, i) => {
      elem.id = i
      return elem})
  }

    const updateCard = (card : card)=> {
      cardList.value = cardList.value.map((i) => {
        if (card.id === i.id) return card;
        return i;       
      })
    }

    const moveCard = (card : card) => {
      cardList.value = cardList.value.map( (x) => { 
        if(x.id === card.id) return card;
        return x;
      
    });
    }

   


  return {cardList, createCard, deleteCard, updateCard, moveCard};

})
