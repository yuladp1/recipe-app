import { defineStore } from "pinia";
export const useTaskStore = defineStore('taskStore', {
    state: () => {
        return {
        tasks: [
            {id:1, title: 'buy some milk', isFav: false},
            {id:1, title: 'buy some milk', isFav: true}  ],
            showmodal: false,
            showAll: false,
            recipes: [],
            item: {},
            recipeName: "",
            recipeIngridients: "",
            dish: "",
        }
    }
})