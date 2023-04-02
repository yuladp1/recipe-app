import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
export const useCatalog = defineStore('recipesStore', {
    state: () => ({
        recipes: [],
        dishes: ["main dishes", "cold platter", "hot appetizers", "starters", "meat", "salads", "soups", "meat"],
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
        recipesLocal: new Array(),
        recipesLocal: useStorage('recipesLocal', [])
    }),
    getters: {
        isFetching(state) {
            return state.fetching;
        },
        getAllrecipesLocal() {
            return state.recipesLocal;
        },
        results(state) {
            return state.recipes;
        }
    },
    actions: {
        async fetchNewArrivals() {
            this.fetching = true;
            try {
                const response = await fetch("recipes.json");
                const result = await response.json();
                const recipes = result;
                this.recipesLocal = recipes;
               } catch (err) {
                console.error('Error loading new arrivals:', err);
                this.recipes = [];
                return err;
            }
            this.fetching = false;
        },

        calculateAmountPages() {
            // calculate how many pages we need to display
            //this.numPages = Math.ceil(this.recipesLocal.length / 3);
            // 
            this.numPages = Math.ceil(this.recipesLocal.length / 3);
            this.arrayOfPages = Array.from({ length: this.numPages }, (_, index) => index + 1);
            },
        showItems(page) {
            if (this.showAll) {
                this.currentPage = page;
                this.showAll = true;
                this.calculateAmountPages();
                this.startPoint = (page - 1) * this.resultsPerPage;
                this.temp = this.recipesLocal.slice(
                    this.startPoint,
                    this.startPoint + 3
                );
            }
        },
        showPrevious() {
            if (this.currentPage > 1) {
                this.showItems(this.currentPage - 1)
            }
        },
        showNext() {
            if (this.currentPage < this.numPages) {
                this.showItems(this.currentPage + 1)
            }
        },

    }
})


