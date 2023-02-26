<template>
  <div class ="container columns is-multiline ">
  <div class="card column has-text-centered">
    <div class="column card-header subtitle is-full py-3">Recipe number: {{ id }}</div>
    <h1 class="column card-header title is-full py-3" >
      {{ recipeItem.RecipeTitle }}
    </h1>
    <div class="card-content is-italic is-4">{{ recipeItem.ingredients }}</div>
    <div class = "card-content is-size-4 has-text-weight-semibold">Serve as: {{ recipeItem.kindOfDish }}</div>
  </div>
</div>
</template>

<script>
import { useCatalog } from "../stores/recipeStore";
export default {
  setup() {
    const taskStore = useCatalog();
    return { taskStore };
  },
  name: "RecipeCard",
  created() {},
  data() {
    return {
      recipeItem: [],
    };
  },
  props: {
    id: [],
    recipe: [],
  },

  methods: {
    findRecipe(id) {
      this.recipeItem = this.taskStore.recipes.find((c) => c.ID == id);
    },
  },
  created() {
    this.findRecipe(this.id);
  },
};
</script>

<style lang="scss" scoped></style>
