import { ref, computed, createRenderer } from 'vue'
import { defineStore } from 'pinia'
import type { card, CardRole, Status } from '@/types/types';



export const useCardStore = defineStore('card', () => {
  const cardList = ref<card[]>([]);


  const createCard = (card : card) => {
    cardList.value.push(card);
  }
  // удаление карты 
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


// редактирование 


  return {cardList, createCard, deleteCard};

})

// export interface card{
//     id: Number,
//     role: CardRole;
//     date: Date,
//     status: Status,
//     title: String,
//     subtitle: String, 
//     size: CardSize,
//     priority: CardSize,
//     deadline: Date,
//     redact: Date | null,
//     overdue: boolean,
// } 