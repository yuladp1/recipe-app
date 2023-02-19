import { defineStore } from "pinia";
export const useCatalog = defineStore('taskStore', {
    state: () => {
        return {
            recipes: [],
            showmodal: false,
            showAll: false,
            item: {},
            recipeName: "",
            recipeIngridients: "",
            dish: "",
            fetching: false
        }
    },
    getters: {
        isFetching(state) {
            return state.fetching;
        },
        results(state) {
            return state.recipes;
          },
    },
    actions: {
        async fetchNewArrivals() {
            this.fetching = true;
            const response = await fetch("recipes.json");
            try {
                const result = await response.json();
                this.recipes = result;
            }
            catch (err) {
                this.recipes = [];
                console.error('Error loading new arrivals:', err);
                return err;
              }
            this.fetching = false;
        }
    }
})


