<template>
  <div>
      <h1>Recipe number: {{ id }}</h1>
      <div>{{ recipeItem.RecipeTitle }}</div>
      <div>{{ recipeItem.ingredients }}</div>
      <div>{{ recipeItem.kindOfDish }}</div>
  </div>
</template>

<script>
import {useCatalog} from '../stores/recipeStore'
import { mapState, mapActions } from 'pinia'
export default { 
   setup() {
    const taskStore = useCatalog();
    return {taskStore};

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
      this.recipeItem =  this.taskStore.recipes.find(c => c.ID == id) 
    }
  },
   created() {
        this.findRecipe(this.id);
  }
};
</script>

<style lang="scss" scoped></style>