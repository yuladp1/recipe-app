<template>
  <div class="tags  has-text-centered">
    <div v-for="item in recipesStore.dishes" :key="item">
      <router-link :to="{ name: 'DishRecipes', params: { dish: item } }">
        <span class="tag is-large is-rounded mx-3">{{ item }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useCatalog } from "../stores/recipeStore";
export default {
  name: "RecipesTags",
  setup() {
    const recipesStore = useCatalog();
    return { recipesStore };
  },
};
</script>

<style lang="scss">

</style>
