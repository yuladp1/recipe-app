<template>
  <aside class="menu column-3 my-4">
    <p class="menu-label is-size-5">Find recipe:</p>
    <ul class="menu-list is-size-5">
      <div v-for="item in taskStore.recipes" :key="item.ID">
        <router-link
          :to="{ name: 'DishRecipes', params: { dish: item.kindOfDish } }"
          :itemprop="item"
        >
          <li>{{ item.kindOfDish }}</li>
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
    const taskStore = useCatalog();
    return { taskStore };
  },
};
</script>

<style lang="scss" scoped></style>
