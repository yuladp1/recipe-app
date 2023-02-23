<template>
  <div class="card column is-4">
    <h1 class="title is-4 has-text-centered">Recipe number: {{ id }}</h1>
    <div class="card-header title is-4 has-text-centered">
      {{ recipeItem.RecipeTitle }}
    </div>
    <div class="card-content is-italic is-4">{{ recipeItem.ingredients }}</div>
    <div card-content is-size-4>{{ recipeItem.kindOfDish }}</div>
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
