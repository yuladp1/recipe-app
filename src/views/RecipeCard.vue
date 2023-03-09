<template>
  <div class="container columns is-centered is-multiline py-5 wrapper__recipe">
    <div class="card column is-8 has-text-centered has-background-white "> 
      <h1 class="column card-header title is-full py-3 px-3 is-shadowless">
        {{ recipeItem.RecipeTitle }}
      </h1>
      <div class="card-content is-italic is-4 has-text-justified is-shadowless">
        {{ recipeItem.ingredients }}
      </div>
      <router-link
        :to="{ name: 'DishRecipes', params: { dish: recipeItem.kindOfDish } }"
      >
        <div class="card-content is-size-5 has-text-weight-semibold">
          Serve as: {{ recipeItem.kindOfDish }}
        </div>
      </router-link>
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
      this.recipeItem = this.recipesStore.recipes.find((c) => c.ID == id);
    },
  },
  created() {
    this.findRecipe(this.id);
  },
};
</script>

<style scoped>
.wrapper__recipe {
    background-image: url("../assets/background-recipe.jpg");
  background-size: cover;
  background-position: center center;

}

</style>
