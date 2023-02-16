<template>
  <div class="box has-text-centered my-4 py-6 recipe-app__content">
    <h1 class="title is-2 is-uppercase is-spaced">Welcome to the recipe app</h1>
    <h2 class="subtitle is-3">
      This app will help you save your favorite recipes fast
    </h2>
    <button class="button is-primary" @click="taskStore.showmodal = true">
      Add new recipe
    </button>
    <button class="button is-link" @click="taskStore.showAll = !taskStore.showAll">Show all</button>
  </div>

  <div class="columns is-multiline" v-if="taskStore.showAll">
    
    <div class="card column is-4" v-for="item in recipes" :key="item.ID">
     <router-link to="linkOpen"> <div class="card-header title is-4 has-text-centered">
        {{ item.RecipeTitle }}
      </div></router-link>
           <div class="card-content is-italic is-4">
        {{ item.ingredients }}
      </div>
      <div class="card-content is-size-4">Serve as: {{ item.kindOfDish }}</div>
    </div>
  </div>



</template>
<script>
import {useTaskStore} from '../stores/recipeStore' 
export default {
  setup() {
    const taskStore = useTaskStore();
    return (taskStore);

  },
  name: "Home",
  data() {

  },
  methods: {
    addNewRecipe() {
      const newRecipe = {
        ID: Date.now(),
        RecipeTitle: this.recipeName,
        ingredients: this.recipeIngridients,
        kindOfDish: this.dish,
      };
      this.recipes.push(newRecipe);
      this.showmodal = false;
    },
  },
  async mounted() {
    const result = await fetch("recipes.json");
    const data = await result.json();
    this.recipes = data;
  },
  computed: {
    linkOpen() {
      return `/products/${this.product.id}`;
    },
  },
};
</script>

<style scoped>
.recipe-app__content {
  background-image: url("../assets/pexels-diana-light-7296683.jpg");
  background-size: cover;
  background-position: center center;
}
</style>
