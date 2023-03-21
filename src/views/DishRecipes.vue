<template>
  <div class = "container columns is-multiline container__dish-recipes" >
    <h1 class ="column is-12 subtitle is-5" >Here are the search results for the query '{{ dish }}':</h1>
  <div
    class="card column has-text-centered "
    v-for="item in arrayRecipes"
    :key="item.ID"
  >
  <router-link :to="{
            name: 'RecipeCard',
            params: { id: item.ID},
          }">
    <div class="column card-header title is-size-2 is-full py-3 px-3 is-shadowless">
      {{ item.RecipeTitle }}
    </div>
</router-link>
    <div class="card-content is-italic is-4">
      {{ item.ingredients }}
    </div>
    <div  class = "card-content is-size-4 has-text-weight-semibold">Serve as: {{ item.kindOfDish }}</div>
  </div>
</div>



</template>

<script>
import { useCatalog } from "../stores/recipeStore";
export default {
  setup() {
    const recipesStore = useCatalog();
    return { recipesStore };
  },
  name: "DishRecipes",
  props: {
    dish: "",
  },

  data() {
    return {
      arrayRecipes: [],
    };
  },
  methods: {
     findDishes() {
      this.arrayRecipes = this.recipesStore.recipes.filter(
        (item) => item.kindOfDish == this.dish
      )
     },
  },
  created() {
    this.findDishes();
  },
  updated () {
    this.findDishes();
  }
};
</script>

<style scoped>
.container__dish-recipes {
  margin-top: 100px;
}
</style>
