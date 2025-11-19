import { ref, computed, createRenderer } from 'vue'
import { defineStore } from 'pinia'
import type { card, CardRole, Status } from '@/types/types';



export const useCardStore = defineStore('card', () => {
  const cardList = ref<card[]>([]);

  const createCard = (card : card) => {
    cardList.value.push(card);
  }


// удаление карты 

// создание карты 

// редактирование 

// цвета
  return {cardList, createCard};

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