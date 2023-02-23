<template>
  <div
    class="card column is-4"
    v-for="item in taskStore.recipes"
    :key="item.ID"
  >
    <div class="card-header title is-4 has-text-centered">
      {{ item.RecipeTitle }}
    </div>
    <div class="card-content is-italic is-4">
      {{ item.ingredients }}
    </div>
    <div class="card-content is-size-4">Serve as: {{ item.kindOfDish }}</div>
  </div>
</template>

<script>
import { useCatalog } from "../stores/recipeStore";
export default {
  setup() {
    const taskStore = useCatalog();
    return { taskStore };
  },
  name: "DishRecipes",
  props: {
    dish: "",
    itemprop: [],
  },

  data() {
    return {
      arrayRecipes: [],
    };
  },
  methods: {
    /*find all recipes equal prop "dish" 
   -from taskStore.recipes (taskStore.recipes.kndOfDish ==dish),
   -add to local array,
   -show in  "v-for="item in arrayRecipes"
    */
  },
};
</script>

<style lang="scss" scoped></style>
