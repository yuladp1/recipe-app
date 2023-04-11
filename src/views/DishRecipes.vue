<template>
  <div class="columns is-multiline has-text-centered __recipes-container">
    <recipes-tags class="is-hidden-touch mx-auto"> </recipes-tags>
    <h1 class="column subtitle is-full">
      Here are the search results for the query '{{ dish }}':
    </h1>

    <div
      class="card column is-full mb-2"
      v-for="item in arrayRecipes"
      :key="item.ID"
    >
      <div class="card-header is-shadowless">
        <div
          class="card-header-title subtitle subtitle has-text-link py-3 __recipe-header"
          @click="goToRecipeCard(item.ID)"
        >
          {{ item.RecipeTitle }}
        </div>
      </div>
      <div
        class="card-content is-italic has-text-justified container__dish-ingredients"
      >
        {{ item.ingredients }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated, reactive } from "vue";
import { useCatalog } from "../stores/recipeStore";
import RecipesTags from "../components/RecipesTags.vue";
import { useRouter } from "vue-router";
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
    const router = useRouter();
    const goToRecipeCard = (itemid) => {
      router.push({ name: "RecipeCard", params: { id: itemid } });
    };
    onMounted(findDishes);
    onUpdated(findDishes);
    return {
      arrayRecipes: computed(() => arrayRecipes.value),

      goToRecipeCard,
    };
  },
};
</script>

<style scoped>
.__recipes-container {
  margin-top: 100px;
}
.__recipe-header:hover {
  cursor: pointer;
}
.container__dish-ingredients {
  max-height: 150px;
  overflow: hidden;
}
</style>
