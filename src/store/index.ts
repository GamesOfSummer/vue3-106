// @ts-check
import type Task from '@/model/Task';
import { defineStore, acceptHMRUpdate } from 'pinia'


export const useTaskStore = defineStore({
  id: 'cart',
  state: () => ({
    rawItems: [] as Task[],
  }),
  getters: {
    /**
     * @returns {Array<{ name: string; amount: number }>}
     */
    items: (state) =>{return state.rawItems;}
      
  },
  actions: {
    /**
     * Add item to the cart
     * @param {string} name
     */
    addItem(name :Task) {
      this.rawItems.push(name);
    },

  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot))
}
