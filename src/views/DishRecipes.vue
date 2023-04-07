<template>
  <div class="container columns is-multiline has-text-centered">
    <recipes-tags class="is-hidden-touch"> </recipes-tags>
    <h1 class="column is-12 subtitle is-5">
      Here are the search results for the query '{{ dish }}':
    </h1>

    <div
      class="card column has-text-centered is-full my-3"
      v-for="item in arrayRecipes"
      :key="item.ID"
    >
      <div
        class="column card-header title is-size-2 is-full py-3 px-3 is-shadowless"
        on-click="showRecipes"
      >
        {{ item.RecipeTitle }}
      </div>

      <div class="card-content is-italic is-4 container__dish-ingredients">
        {{ item.ingredients }}
      </div>
      <div class="card-content is-size-4 has-text-weight-semibold">
        Serve as: {{ item.kindOfDish }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated, reactive } from "vue";
import { useCatalog } from "../stores/recipeStore";
import RecipesTags from "../components/RecipesTags.vue";
export default {
  components: { RecipesTags },
  name: "DishRecipes",
  props: {
    dish: String,
  },
  setup(props) {
    const recipesStore = useCatalog();
    const arrayRecipes = reactive([]);
    const findDishes = () => {
      arrayRecipes.value = recipesStore.recipesLocal.filter(
        (item) => item.kindOfDish == props.dish
      );
    };
    const showRecipes = () => {
      router.push({ name: "RecipeCard", params: { id: item.ID } });
    };
    onMounted(findDishes);
    onUpdated(findDishes);
    return {
      arrayRecipes: computed(() => arrayRecipes.value),
      showRecipes,
    };
  },
};
</script>

<style scoped>
.container__dish-ingredients {
  max-height: 150px;
  overflow: hidden;
}
</style>
