import { defineStore } from "pinia";
export const useCatalog = defineStore('recipesStore', {
    state: () => {
        return {
            recipes: [],
            showmodal: false,
            showAll: false,
            item: {},
            recipeName: "",
            recipeIngridients: "",
            dish: "",
            fetching: false,
            recipesStoreLength: '', 
            start_number: '1',
            resultsPerPage: '3',
            recipesShowOnClick: [],
            startPoint: '',
            numPages: '',
            currentPage: '',
            temp: [],
            arrayOfPages: [],
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
        },

        calculateAmountPages() {
            // calculate how many pages we need to display
            this.numPages = Math.ceil( this.recipes.length / 3);
           // this.recipesStore.arrayOfPages = new Array(this.recipesStore.numPages);
      
            this.arrayOfPages = Array.from({length: this.numPages}, (_, index) => index + 1);
            console.log(this.arrayOfPages);
          },
          showItems(page) {
            this.currentPage = page;
            this.showAll = true;
            this.calculateAmountPages();
            this.startPoint = (page - 1) * this.resultsPerPage;
            this.temp = this.recipes.slice(
              this.startPoint,
              this.startPoint + 3
              );
          },

    }
})


