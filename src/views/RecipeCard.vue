<template>
  <div
    class="container columns is-centered is-multiline py-5 has-text-weight-bold wrapper__recipe"
  >
    <div class="card column is-8 has-text-centered has-background-white">
      <h1
        class="column card-header title is-size-2 is-full py-3 px-3 is-shadowless"
      >
        {{ recipeItem.RecipeTitle }}
      </h1>
      <div
        class="card-content is-italic is-size-5 has-text-justified is-shadowless"
      >
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
    <div class="column is-8 m-auto">
      <recipes-tags />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useCatalog } from "../stores/recipeStore";
import RecipesTags from "../components/RecipesTags.vue";

export default {
  components: { RecipesTags },
  name: "RecipeCard",
  props: {
    id: {
      type: String,
      required: true,
    },
    recipe: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const recipesStore = useCatalog();
    const recipeItem = computed(() =>
      recipesStore.recipesLocal.find((c) => c.ID === props.id)
    );

    return {
      recipeItem,
    };
  },
};
</script>

<style>
.wrapper__recipe {
  background-image: url("../assets/background-recipe.jpg");
  background-size: cover;
  background-position: center center;
}
</style>
