<template>
  <aside class="menu py-0 has-text-weight-semibold ">
    <p class="menu-label is-size-5 py-0">Find recipes:</p>
    <ul class="menu-list is-size-6 ">
      <div v-for="item in recipesStore.recipes" :key="item.ID">
        <router-link
          :to="{ name: 'DishRecipes', params: { dish: item.kindOfDish } }"
        >
          <li>- {{ item.kindOfDish }}</li>
        </router-link>
      </div>
    </ul>
  </aside>
</template>

<script>
import { useCatalog } from "../stores/recipeStore";
export default {
  name: "MenuAside",
  setup() {
    const recipesStore = useCatalog();
    return { recipesStore };
  },
};
</script>

<style lang="scss" scoped></style>
