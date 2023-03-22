import { defineStore } from "pinia";
export const useCatalog = defineStore('recipesStore', {
    state: () => {
        return {
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
            this.numPages = Math.ceil(JSON.parse(localStorage.getItem("recipesLocal")).length / 3);



            this.arrayOfPages = Array.from({ length: this.numPages }, (_, index) => index + 1);
            console.log(this.arrayOfPages);
        },
        showItems(page) {
            if (this.showAll) {
            this.currentPage = page;
            this.showAll = true;
            this.calculateAmountPages();
            this.startPoint = (page - 1) * this.resultsPerPage;
            this.recipes = JSON.parse(localStorage.getItem("recipesLocal"));
            this.temp = this.recipes.slice(
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


