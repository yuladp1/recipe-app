<template>
  <div class="columns is-multiline is-centered">
  <div class="card column is-8 has-text-centered has-background-white __card-container">
    <div class="card-header is-shadowless py-3">
      <div class="card-header-title subtitle has-text-link">
        {{ recipeItem.RecipeTitle }}
      </div>
    </div>
    <div class="card-content is-italic has-text-justified">
      {{ recipeItem.ingredients }}
    </div>
    <router-link
      :to="{ name: 'DishRecipes', params: { dish: recipeItem.kindOfDish } }"
    >
      <div class="card-content is-5 has-text-weight-semibold has-text-link">
        serve as: {{ recipeItem.kindOfDish }}
      </div>
    </router-link>
  </div>
  <div class="column is-8 ">
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
.__card-container {
  margin-top: 100px;
}
</style>
